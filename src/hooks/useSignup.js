import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../gql/queries";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      console.log("signup success")
    },
    onError: (err) => {
      console.log("signup failed", err)
    }
  });

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } })
    return data
  };

  return [signUp, result];
};

export default useSignUp