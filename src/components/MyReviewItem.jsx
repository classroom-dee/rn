import { View, Text, Pressable, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW, ME } from "../gql/queries";

import ThemedText from "./ThemedText";
import theme from "../theme";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MyReviewItem = ({ review }) => {

  const [deleteReview, { data, loading, error }] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: ME, variables: { 'includeReviews': true } }]
  })

  const nav = useNavigate();

  const link = `/one/${review.repository.id}`

  const date = new Date(review.createdAt)
  const formatted = 
    String(date.getDate()).padStart(2, "0") + "-" +
    months[date.getMonth()] + "-" +
    date.getFullYear();
  
  const onDeletePress = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete it?",
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteReview({ variables: { deleteReviewId: review.id } })}
      ],
      { cancelable: true }
    )
  }

  return (
    <View style={{ ...theme.repoItemStyle.itemBackground, gap: 5 }}>
      
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 15, borderColor: 'blue', borderStyle: 'solid', borderWidth: 2 }}>
          <Text style={{ color: 'blue' }}>{review.rating}</Text>
        </View>
        <View style={{ gap: 5, flex: 1, width: '100%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{review.repository.id.replace(".", "/")}</Text>
          <Text style={{ color: 'gray' }}>{formatted}</Text>
          <Text style={{ flexWrap: 'wrap' }}>{review.text}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Pressable
          onPress={() => nav(link)}
          style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5, borderRadius: 5, width: '45%' }}
        >
          <ThemedText style={{ color: theme.colors.textWhite }}>View repository</ThemedText>
        </Pressable>
        <Pressable
          onPress={onDeletePress}
          style={{ backgroundColor: theme.colors.warning, alignItems: "center", padding: 5, borderRadius: 5, width: '45%' }}
        >
          <ThemedText style={{ color: theme.colors.textWhite }}>Delete review</ThemedText>
        </Pressable>
      </View>

    </View>
  )
};

export default MyReviewItem