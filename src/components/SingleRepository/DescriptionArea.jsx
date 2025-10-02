import { Image, View } from "react-native"
import TextDescription from "./TextDescription"
import theme from "../../theme"

const DescriptionArea = ({ item }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={theme.repoItemStyle.avatar} source={{ uri: item.ownerAvatarUrl }} alt={item.fullName}/>
      <TextDescription item={item} />
    </View>
  )
}

export default DescriptionArea