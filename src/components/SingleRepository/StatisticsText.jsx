import { View } from "react-native"
import theme from "../../theme"
import ThemedText from "../ThemedText"

const StatisticsText = ({ name, value }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <ThemedText style={{ fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>
        {value >= 1000 ? `${Math.round(value / 100) / 10}k` : value}
      </ThemedText>
      <ThemedText style={{ color: theme.colors.textSecondary}}>{name}</ThemedText>
    </View>
  )
}

export default StatisticsText