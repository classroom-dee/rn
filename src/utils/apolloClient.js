import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import Constants from 'expo-constants'
import { setContext } from '@apollo/client/link/context';

const { apolloDev, apolloProd } = Constants.expoConfig.extra;

const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.env === 'prod' ? apolloProd : apolloDev
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(`create apollo account error: ${e}`);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;