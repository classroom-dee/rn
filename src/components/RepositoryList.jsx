import { FlatList, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../gql/queries';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const { data } = useRepositories(); -> uses uri endpoint with the fetch API
  const { data, error, loading } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
  });

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

  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default RepositoryList;