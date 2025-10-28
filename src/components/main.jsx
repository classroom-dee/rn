import { StyleSheet, View, Platform } from 'react-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ThemedText from './ThemedText';
import ReviewForm from './ReviewForm';

import { Route, Routes, Navigate, useNavigate } from 'react-router-native';
import { useState } from 'react';

import useAuthStorage from '../hooks/useAuthStorage';
import useSignIn from '../hooks/useSignIn';
import useReview from '../hooks/useReview';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  const [user, setUser] = useState(null);
  const [signIn, result] = useSignIn();
  const [addReview, reviewResult] = useReview()
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

  const handleReviewSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      const reviewMutResult = await addReview({ ownerName, repositoryName, rating, text})
      nav(`/one/${reviewResult.data.createReview.repositoryId}`)
    } catch (e) {
      console.log(`on review submit error: ${e}`)
    }

  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn onSubmit={handleSubmit}/>} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/one/:id" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/review" element={<ReviewForm onSubmit={handleReviewSubmit} />} />
      </Routes>
      <View>
        <ThemedText style={{ color: 'white', paddingBottom: 5, paddingLeft: 30 }}>Running on {Platform.OS}</ThemedText>
      </View>
    </View>
  );
};

export default Main;