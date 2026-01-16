import { FlatList, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ sortBy, keyword }) => {
  // const { data } = useRepositories(); -> uses uri endpoint with the fetch API
  const sortAndFilter = {
    'Latest': { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: keyword },
    'High rating': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchKeyword: keyword },
    'Low rating': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', searchKeyword: keyword }
  }

  const { repositories, fetchMore, loading, error } = useRepositories({
    first: 6,
    after: "",
    ...sortAndFilter[sortBy]
  })

  const onEndReach = () => {
    fetchMore();
  };

  // const { data, error, loading } = useQuery(GET_REPOS, {
  //   fetchPolicy: 'cache-and-network',
  //   variables: sortAndFilter[sortBy]
  // });

  if (error) {
    return (
      <View><Text>Error</Text></View>
    )
  }

  if (loading) {
    return (
      <View><Text>Loading...</Text></View>
    )
  }

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryList;