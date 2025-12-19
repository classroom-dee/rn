import { StyleSheet, View, Platform } from 'react-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Signup from './Signup'
import ThemedText from './ThemedText';
import ReviewForm from './ReviewForm';
import SorterAndFilter from './SorterAndFilter';
import MyReviews from './MyReviews';

import { Route, Routes, Navigate, useNavigate } from 'react-router-native';
import { useState } from 'react';

import useAuthStorage from '../hooks/useAuthStorage';
import useSignIn from '../hooks/useSignIn';
import useReview from '../hooks/useReview';
import useSignUp from '../hooks/useSignup';



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  const [user, setUser] = useState(null);
  const [signIn, signInResult] = useSignIn();
  const [signUp, signUpResult] = useSignUp();
  const [addReview, reviewResult] = useReview();
  const [sortBy, setSortBy] = useState('Latest');
  const [keyword, setKeyword] = useState('');
  const nav = useNavigate()

  const authStorage = useAuthStorage();

  const onKeywordChange = (debouncedText) => setKeyword(debouncedText)

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

  const handleSignUp = async ({ username, password }) => {
    try {
      const res = await signUp({ username, password })
      // console.log(data.createUser)
      const user = await signIn({ username: res?.createUser?.username, password: password })
      setUser({ ...await authStorage.getAccessToken(), accessToken: user.accessToken, expiresAt: user.expiresAt })
      nav('/')
    } catch (e) {
      console.log(`Error on sign up: ${e}`);
    }
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <SorterAndFilter sortBy={sortBy} setSortBy={setSortBy} onKeywordChange={onKeywordChange} />
      <Routes>
        <Route path="/" element={<RepositoryList sortBy={sortBy} keyword={keyword} />} />
        <Route path="/signin" element={<SignIn onSubmit={handleSubmit}/>} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/signup" element={<Signup onSubmit={handleSignUp} />} />
        <Route path="/one/:id" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/review" element={<ReviewForm onSubmit={handleReviewSubmit} />} />
        <Route path="/my-reviews" element={<MyReviews />} />
      </Routes>
      <View>
        <ThemedText style={{ color: 'white', paddingBottom: 5, paddingLeft: 30 }}>Running on {Platform.OS}</ThemedText>
      </View>
    </View>
  );
};

export default Main;