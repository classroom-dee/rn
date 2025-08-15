import { View, TextInput, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import validationSchema from "../schemas";
import ThemedText from './ThemedText'

const initialValues = {
  id: '',
  pw: ''
}

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={{ rowGap: 5 }}>
      <TextInput
        style={
          formik.errors.id 
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        placeholder="Username"
        value={formik.values.id}
        onChangeText={formik.handleChange('id')}
        
      />
      {formik.touched.id && formik.errors.id && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.id}</ThemedText>
      )}
      <TextInput
        style={
          formik.errors.pw 
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        placeholder="Password"
        value={formik.values.pw}
        onChangeText={formik.handleChange('pw')}
        secureTextEntry
      />
      {formik.touched.pw && formik.errors.pw && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.pw}</ThemedText>
      )}
      <Pressable 
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
        disabled={ (formik.errors.id || formik.errors.pw) ? true : false }
      >
        <ThemedText style={{ color: theme.colors.textWhite }}>Sign in</ThemedText>
      </Pressable>
    </View>
  )
};

export default SignIn;