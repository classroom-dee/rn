const RepositoryItem = ({ item }) => {

    return (
        <ul style={{ listStyleType: "none"}}>
            <li>id: {item.id}</li>
            <li>fullname: {item.fullName}</li>
            <li>description: {item.description}</li>
            <li>language: {item.language}</li>
            <li>forksCount: {item.forksCount}</li>
            <li>stargazersCount: {item.stargazersCount}</li>
            <li>ratingAverage: {item.ratingAverage}</li>
            <li>reviewCount: {item.reviewCount}</li>
            <li>ownerAvatarUrl: {item.ownerAvatarUrl}</li>
        </ul>
    )
}

export default RepositoryItem