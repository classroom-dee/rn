import { useMutation } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";
import { CREATE_REVIEW } from "../gql/queries";
import { useApolloClient } from "@apollo/client";

const useReview = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onCompleted: (data) => {
      console.log("review submission done")
    },
    onError: (err) => {
      console.log("review submission failed", err)
    }
  });

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    const token = await authStorage.getAccessToken()
    const { data } = await mutate({ 
      variables: { ownerName, repositoryName, rating: Number(rating), text },
      context: {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      }
    })
    client.resetStore()
    return data
  };

  return [review, result];
};

export default useReview