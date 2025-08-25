import { useMutation } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";
import { AUTHENTICATE } from "../gql/queries";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onCompleted: (data) => {
      console.log("login success")
    },
    onError: (err) => {
      console.log("login failed", err)
    }
  });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } })
    await authStorage.setAccessToken({
      accessToken: data.authenticate.accessToken, 
      expiresAt: data.authenticate.expiresAt,
      username: data.authenticate.user.username,
      id: data.authenticate.user.id
    })
    client.resetStore()
    const user = await authStorage.getAccessToken()
    return user
  };

  return [signIn, result];
};

export default useSignIn