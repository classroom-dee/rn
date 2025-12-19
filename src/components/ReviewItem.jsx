import { View, Text } from "react-native";
import theme from "../theme";

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

export default ReviewItem