import { View } from "react-native"
import StatisticsText from "./StatisticsText"
import theme from "../../theme"
import DescriptionArea from "./DescriptionArea"

const RepositoryItem = ({ item }) => {

  return (
    <View testID="repositoryItem" style={theme.repoItemStyle.itemBackground}>
      <DescriptionArea item={item}/>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <StatisticsText name="Stars" value={item.stargazersCount}/>
        <StatisticsText name="Forks" value={item.forksCount}/>
        <StatisticsText name="Reviews" value={item.reviewCount}/>
        <StatisticsText name="Rating" value={item.ratingAverage}/>
      </View>
    </View>
  )
}

export default RepositoryItem