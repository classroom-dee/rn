import { Image } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import TextDescription from "./TextDescription"
import theme from "../../theme"

const DescriptionArea = ({ item }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flexDirection: "row" }}>
        <Image style={theme.repoItemStyle.avatar} source={{ uri: item.ownerAvatarUrl }} alt={item.fullName}/>
        <TextDescription item={item} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default DescriptionArea