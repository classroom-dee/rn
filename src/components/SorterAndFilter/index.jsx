import { View, StyleSheet } from "react-native"
import Sorter from "./Sorter"
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBarBG,
  },
});

const SorterAndFilter = ({ sortBy, setSortBy }) => {

  return (
    <View style={styles.container}>
      <Sorter sortBy={sortBy} setSortBy={setSortBy}/>
    </View>
  )
}

export default SorterAndFilter