import { StyleSheet, View, Platform } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import ThemedText from './ThemedText';
import { useState } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [user, setUser] = useState(null);

  const authStorage = useAuthStorage();

  const handleSubmit = async ({ accessToken, expiresAt }) => {
    setUser({ ...await authStorage.getAccessToken(), accessToken, expiresAt })
  }
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn handleSubmit={handleSubmit}/>} />
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