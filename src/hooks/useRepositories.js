import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../gql/queries';

const useRepositories = (variables) => {

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOS, {
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;