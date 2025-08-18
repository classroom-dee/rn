// import { StatusBar } from 'expo-status-bar';
import Main from './src/components/main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    > 
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}