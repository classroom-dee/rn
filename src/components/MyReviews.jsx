import { View, Text, FlatList, StyleSheet } from "react-native";

import MyReviewItem from "./MyReviewItem";

import { useQuery } from "@apollo/client";
import { ME } from "../gql/queries";


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ErrorAndLoading = ({ message }) => <View><Text>{message}</Text></View>

const ItemSeparator = () => <View style={{ backgroundColor: '#F5F5F5', ...styles.separator }} />;
const MyReviews = () => {

  const { data, error, loading } = useQuery(
    ME,
    { variables: { 'includeReviews': true } },
  )

  if (error) return <ErrorAndLoading message="ERROR!!" /> 
  if (loading) return <ErrorAndLoading message="LOADING!!" /> // don't put error and loading together like `if (error || loading)`

  const reviews = data.me.reviews.edges.map(edge => edge.node)

  return (
    <FlatList 
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />

  )
}

export default MyReviews