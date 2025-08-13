import { Text, View, TextInput, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";

const initialValues = {
  id: '',
  pw: ''
}

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={{ rowGap: 5 }}>
      <TextInput
        style={theme.repoItemStyle.itemBackground}
        placeholder="Username"
        value={formik.values.id}
        onChangeText={formik.handleChange('id')}
      />
      <TextInput
        style={theme.repoItemStyle.itemBackground}
        placeholder="Password"
        value={formik.values.pw}
        onChangeText={formik.handleChange('pw')}
        secureTextEntry
      />
      <Pressable 
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
      >
        <Text style={{ color: theme.colors.textWhite }}>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;