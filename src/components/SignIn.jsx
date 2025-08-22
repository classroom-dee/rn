import { View, TextInput, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import validationSchema from "../schemas";
import ThemedText from './ThemedText'
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const [signIn] = useSignIn();
  
  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await signIn({ username, password })
      const userStore = new AuthStorage(`auth-${data.user.username}`)
      await userStore.setAccessToken({
        accessToken: data.accessToken, 
        expiresAt: data.expiresAt,
        username: data.user.username,
        id: data.user.id
      })
      // propagate to main.js?
    } catch (e) {
      console.log(e);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })


  return (
    <View style={{ rowGap: 5 }}>
      <TextInput
        style={
          formik.errors.username
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        
      />
      {formik.touched.username && formik.errors.username && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.username}</ThemedText>
      )}
      <TextInput
        style={
          formik.errors.password
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.password}</ThemedText>
      )}
      <Pressable 
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
        disabled={ (formik.errors.username || formik.errors.password) ? true : false }
      >
        <ThemedText style={{ color: theme.colors.textWhite }}>Sign in</ThemedText>
      </Pressable>
    </View>
  )
};

export default SignIn;