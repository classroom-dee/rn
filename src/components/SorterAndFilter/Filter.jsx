import { View, StyleSheet, TextInput } from "react-native";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textWhite,
    padding: 12
  },
  textInput: {
    fontSize: 16
  }
});

const Filter = ({ onKeywordChange }) => {
  
  const [text, setText] = useState("");
  const [debText] = useDebounce(text, 1000);

  useEffect(() => {
    onKeywordChange(debText);
  }, [debText])

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        placeholder="input search keyword"
        value={text}
        onChangeText={setText}
      />
    </View>
  )
}

export default Filter