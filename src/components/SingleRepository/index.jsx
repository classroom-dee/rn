import { View, Text, FlatList, StyleSheet } from "react-native"

import DescriptionArea from "./DescriptionArea"
import StatisticsText from "./StatisticsText"
import ButtonsArea from "./ButtonsArea"
import ReviewItem from "../ReviewItem"

import { useParams } from "react-router-native"
import { useQuery } from "@apollo/client"
import { GET_ONE_REPO } from "../../gql/queries"

import theme from "../../theme"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={{ backgroundColor: '#F5F5F5', ...styles.separator }} />;

const RepositoryItem = () => {

  const { id } = useParams(); // reads :id from router
  const { data, error, loading } = useQuery(
    GET_ONE_REPO, 
    { variables: { repositoryId: id }, fetchPolicy: 'cache-and-network'},
  );

  if (error) return <View><Text>Error: {error.message}</Text></View>
  if (loading) return <View><Text>Loading...</Text></View>

  const item = data.repository
  const reviews = item.reviews.edges.map(edge => edge.node)

  return ( 
    <View testID="repositoryItem" style={theme.repoItemStyle.repoDetailStyle}>
      <DescriptionArea item={item}/>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <StatisticsText name="Stars" value={item.stargazersCount}/>
        <StatisticsText name="Forks" value={item.forksCount}/>
        <StatisticsText name="Reviews" value={item.reviewCount}/>
        <StatisticsText name="Rating" value={item.ratingAverage}/>
      </View>
      <ButtonsArea url={item.url} />
      <FlatList 
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        // No need for list header comp
      />
    </View>
  )
}

export default RepositoryItem