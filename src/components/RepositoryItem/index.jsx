import { View, Pressable } from "react-native"
import { Link } from "react-router-native"
import StatisticsText from "./StatisticsText"
import theme from "../../theme"
import DescriptionArea from "./DescriptionArea"

const RepositoryItem = ({ item }) => {
  const link = `/one/${item.id}`
  return (
    <Pressable testID="repositoryItem" style={theme.repoItemStyle.itemBackground}>
      <Link to={link}>
        <View>
          <DescriptionArea item={item}/>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <StatisticsText name="Stars" value={item.stargazersCount}/>
            <StatisticsText name="Forks" value={item.forksCount}/>
            <StatisticsText name="Reviews" value={item.reviewCount}/>
            <StatisticsText name="Rating" value={item.ratingAverage}/>
          </View>
        </View>
      </Link>
    </Pressable>
  )
}

export default RepositoryItem