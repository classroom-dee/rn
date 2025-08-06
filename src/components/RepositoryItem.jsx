import { View, Text } from "react-native"

const RepositoryItem = ({ item }) => {

    return (
        <View style={{ listStyleType: "none"}}>
            <Text>id: {item.id}</Text>
            <Text>fullname: {item.fullName}</Text>
            <Text>description: {item.description}</Text>
            <Text>language: {item.language}</Text>
            <Text>forksCount: {item.forksCount}</Text>
            <Text>stargazersCount: {item.stargazersCount}</Text>
            <Text>ratingAverage: {item.ratingAverage}</Text>
            <Text>reviewCount: {item.reviewCount}</Text>
            <Text>ownerAvatarUrl: {item.ownerAvatarUrl}</Text>
        </View>
    )
}

export default RepositoryItem