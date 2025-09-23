import { StyleSheet, View, Platform } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate, useNavigate } from 'react-router-native';
import SignIn from './SignIn';
import ThemedText from './ThemedText';
import { useState } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import useSignIn from '../hooks/useSignIn';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [user, setUser] = useState(null);
  const [signIn, result] = useSignIn();
  const nav = useNavigate()

  const authStorage = useAuthStorage();

  const handleSubmit = async ({ username, password }) => {
    try {
      const user = await signIn({ username, password })
      setUser({ ...await authStorage.getAccessToken(), accessToken: user.accessToken, expiresAt: user.expiresAt })
      nav('/')
    } catch (e) {
      console.log(`on login submit error: ${e}`);
    }
  }
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn onSubmit={handleSubmit}/>} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <View>
        <ThemedText style={{ color: 'white', paddingBottom: 5, paddingLeft: 30 }}>Running on {Platform.OS}</ThemedText>
      </View>
    </View>
  );
};

export default Main;