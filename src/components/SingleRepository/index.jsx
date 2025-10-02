import { View, Text } from "react-native"
import { useParams } from "react-router-native"
import StatisticsText from "./StatisticsText"
import theme from "../../theme"
import DescriptionArea from "./DescriptionArea"
import { useQuery } from "@apollo/client"
import { GET_ONE_REPO } from "../../gql/queries"
import ButtonsArea from "./ButtonsArea"

const RepositoryItem = () => {

  const { id } = useParams(); // reads :id from router
  const { data, error, loading } = useQuery(GET_ONE_REPO, { variables: { repositoryId: id }});

  if (error) return <View><Text>Error: {error.message}</Text></View>
  if (loading) return <View><Text>Loading...</Text></View>

  const item = data.repository

  return (
    <View testID="repositoryItem" style={theme.repoItemStyle.repoDetailStyle}>
      <DescriptionArea item={item}/>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <StatisticsText name="Stars" value={item.stargazersCount}/>
        <StatisticsText name="Forks" value={item.forksCount}/>
        <StatisticsText name="Reviews" value={item.reviewCount}/>
        <StatisticsText name="Rating" value={item.ratingAverage}/>
      </View>
      <ButtonsArea url={item.url} />
    </View>
  )
}

export default RepositoryItem