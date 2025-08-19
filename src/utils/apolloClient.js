import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from 'expo-constants'

const createApolloClient = () => {
  const env = Constants.expoConfig.extra.env
  return new ApolloClient({
    uri: env === "dev" ? Constants.expoConfig.extra.apolloDev : Constants.expoConfig.extra.apolloProd,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;