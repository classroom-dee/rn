import { View, StyleSheet } from "react-native"
import Sorter from "./Sorter"
import Filter from "./Filter";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBarBG,
    rowGap: 5,
    marginBottom: 5
  },
});

const SorterAndFilter = ({ sortBy, setSortBy, onKeywordChange }) => {

  return (
    <View style={styles.container}>
      <Filter onKeywordChange={onKeywordChange} />
      <Sorter sortBy={sortBy} setSortBy={setSortBy}/>
    </View>
  )
}

export default SorterAndFilter