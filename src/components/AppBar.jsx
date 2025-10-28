import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../gql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBarBG,
  },
  tabs: {
    color: theme.colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold'
  },
  scollview: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: 'center',

  }
});
// console.log(`the height of the stat bar in this env is: ${Constants.statusBarHeight}`)
const AppBar = () => {
  // context is not needed cuz of the authLink provided by apolloclient provider
  const { data, loading, error } = useQuery(ME)
  console.log(data)

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scollview} 
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingBottom: 5 }}
      >
        <AppBarTab style={styles.tabs} title="Repositories" to="/" />
        {
          data?.me && <AppBarTab style={styles.tabs} title="Create a review" to="/review" />
        }
        {
          !data?.me
            ? <AppBarTab style={styles.tabs} title="Sign in" to="/signin" />
            : <AppBarTab style={styles.tabs} title="Sign out" to="/signout" />
        }
      </ScrollView>
    </View>
  )
}

export default AppBar;