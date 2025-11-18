import { View, TextInput, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import ThemedText from './ThemedText'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const Signup = ({ onSubmit }) => {
  
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
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
        autoComplete="off"
        onBlur={formik.handleBlur('username')}
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
        autoComplete="off"
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.password}</ThemedText>
      )}

      <TextInput
        style={
          formik.errors.passwordConfirmation
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange('passwordConfirmation')}
        autoComplete="off"
        onBlur={formik.handleBlur('passwordConfirmation')}
        secureTextEntry
      />
      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.passwordConfirmation}</ThemedText>
      )}

      <Pressable 
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
        disabled={ (formik.errors.username || formik.errors.password || formik.errors.passwordConfirmation) ? true : false }
      >
        <ThemedText style={{ color: theme.colors.textWhite }}>Sign up</ThemedText>
      </Pressable>
    </View>
  )
};

export default Signup;