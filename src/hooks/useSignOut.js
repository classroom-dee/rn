import useAuthStorage from "./useAuthStorage";
import { useCallback } from "react";
import { useApolloClient } from "@apollo/client";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signOut = useCallback(async () => {
    await authStorage.removeAccessToken()
    client.cache.evict({ 'id': 'ROOT_QUERY', fieldName: 'me' });
    client.cache.gc();
    await client.resetStore(); // clearStore won't rerender.
  }, [authStorage, client]);

  return signOut;
};

export default useSignOut