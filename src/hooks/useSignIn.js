import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../gql/queries";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onCompleted: (data) => {
      console.log("login success")
    },
    onError: (err) => {
      console.log("login failed", err)
    }
  });

  const signIn = async ({ username, password }) => {
    // console.log(`im here uname ${username}, pw ${password}`)
    return mutate({ variables: { username, password } })
  };

  return [signIn, result];
};

export default useSignIn