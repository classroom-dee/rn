import { View } from "react-native"
import theme from "../../theme"
import ThemedText from "../ThemedText"

const TextDescription = ({ item }) => {
  return (
    <View style={{ marginLeft: 5, marginBottom: 5, rowGap: 5 }}>
      <ThemedText style={{ fontWeight: theme.fontWeights.bold }}>{item.id.replace(".", "/")}</ThemedText>
      <ThemedText style={{ color: theme.colors.textSecondary}}>{item.description}</ThemedText>
      <View style={theme.tagsStyle.techStack}>
        <ThemedText style={{ color: theme.colors.textWhite }}>{item.language}</ThemedText>
      </View>
    </View>
  )
}

export default TextDescription