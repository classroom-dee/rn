import { Text, View } from "react-native"
import theme from "../../theme"

const StatisticsText = ({ name, value }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: theme.fontWeights.bold, color: theme.colors.textPrimary }}>
        {value >= 1000 ? `${Math.round(value / 100) / 10}k` : value}
      </Text>
      <Text style={{ color: theme.colors.textSecondary}}>{name}</Text>
    </View>
  )
}

export default StatisticsText