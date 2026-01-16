import { useQuery } from '@apollo/client';
import { GET_ONE_REPO } from '../gql/queries';

const useReviewQuery = (variables) => {

  const { data, loading, fetchMore, ...result } = useQuery(GET_ONE_REPO, {
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables, // spread must come first otherwise 'after' gets overwritten by the init ""
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useReviewQuery;