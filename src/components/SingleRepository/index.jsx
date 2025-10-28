import { View, Text, FlatList, StyleSheet } from "react-native"
import { useParams } from "react-router-native"
import StatisticsText from "./StatisticsText"
import theme from "../../theme"
import DescriptionArea from "./DescriptionArea"
import { useQuery } from "@apollo/client"
import { GET_ONE_REPO } from "../../gql/queries"
import ButtonsArea from "./ButtonsArea"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ReviewItem = ({ review }) => {
  const date = new Date(review.createdAt)
  const formatted = 
    String(date.getDate()).padStart(2, "0") + "-" +
    months[date.getMonth()] + "-" +
    date.getFullYear();

  return (
    <View style={{ flexDirection: 'row', gap: 5, ...theme.repoItemStyle.itemBackground }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 15, borderColor: 'blue', borderStyle: 'solid', borderWidth: 2 }}>
        <Text style={{ color: 'blue' }}>{review.rating}</Text>
      </View>
      <View style={{ gap: 5, flex: 1, width: '100%' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{review.user.username}</Text>
        <Text style={{ color: 'gray' }}>{formatted}</Text>
        <Text style={{ flexWrap: 'wrap' }}>{review.text}</Text>
      </View>
    </View>
  )
};

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