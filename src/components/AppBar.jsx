import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBarBG,
    flexDirection: "row",
    columnGap: 10
  },
  tabs: {
    color: theme.colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
// console.log(`the height of the stat bar in this env is: ${Constants.statusBarHeight}`)
const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab style={styles.tabs} title="Repositories" to="/" />
      <AppBarTab style={styles.tabs} title="Sign in" to="/signin" />
    </View>
  )
};

export default AppBar;