import { View, Text } from "react-native"
import theme from "../../theme"

const TextDescription = ({ item }) => {

  return (
    <View style={{ marginLeft: 5, marginBottom: 5, rowGap: 5 }}>
      <Text style={{ fontWeight: theme.fontWeights.bold }}>{item.id.replace(".", "/")}</Text>
      <Text style={{ color: theme.colors.textSecondary}}>{item.description}</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={theme.tagsStyle.techStack}>
          <Text style={{ color: theme.colors.textWhite }}>{item.language}</Text>
        </View>
      </View>
    </View>
  )
}

export default TextDescription