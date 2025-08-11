// import { StatusBar } from 'expo-status-bar';
import Main from './src/components/main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <Main />
    </NativeRouter>
  );
}