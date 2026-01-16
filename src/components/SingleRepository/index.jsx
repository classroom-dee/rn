import { View, Text, FlatList, StyleSheet } from "react-native"

import DescriptionArea from "./DescriptionArea"
import StatisticsText from "./StatisticsText"
import ButtonsArea from "./ButtonsArea"
import ReviewItem from "../ReviewItem"

import { useParams } from "react-router-native"
import useReviewQuery from "../../hooks/useReviewQuery"

import theme from "../../theme"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={{ backgroundColor: '#F5F5F5', ...styles.separator }} />;

const RepositoryItem = () => {

  const { id } = useParams(); // reads :id from router
  const { repository, fetchMore, loading, error } = useReviewQuery({
    first: 4,
    after: "",
    repositoryId: id
  })

  const onEndReach = () => {
    console.log("end reached")
    fetchMore();
  };

  if (error) return <View><Text>Error: {error.message}</Text></View>
  if (loading) return <View><Text>Loading...</Text></View>

  const reviews = repository.reviews.edges.map(edge => edge.node)

  return ( 
    <View testID="repositoryItem" style={{ flex: 1, backgroundColor: theme.repoItemStyle.repoDetailStyle.backgroundColor, padding: theme.repoItemStyle.repoDetailStyle.padding }}>
      <DescriptionArea item={repository}/>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <StatisticsText name="Stars" value={repository.stargazersCount}/>
        <StatisticsText name="Forks" value={repository.forksCount}/>
        <StatisticsText name="Reviews" value={repository.reviewCount}/>
        <StatisticsText name="Rating" value={repository.ratingAverage}/>
      </View>
      <ButtonsArea url={repository.url} />
      <FlatList 
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default RepositoryItem