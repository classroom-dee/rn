import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textWhite,
  },
  button: {
    padding: 6,
    backgroundColor: theme.colors.textWhite,
    marginHorizontal: 6,
  },
  buttonText: {
    fontSize: 16,
  },
});

const Sorter = ({ sortBy, setSortBy }) => {
  
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      
      <Pressable style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.buttonText}>Sort by: {sortBy}</Text>
      </Pressable>

      {open && (
        <Picker
          selectedValue={sortBy}
          onValueChange={(value) => {
            setSortBy(value);
            setOpen(false);
          }}
          mode="dialog"
        >
          <Picker.Item label="Latest" value="latest" />
          <Picker.Item label="High rating" value="high rating" />
          <Picker.Item label="Low rating" value="low rating" />
        </Picker>
      )}
    </View>
  )
}

export default Sorter