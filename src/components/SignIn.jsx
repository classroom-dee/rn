import { Text, View, TextInput, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import validationSchema from "../schemas";

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
        <Text style={{ color: 'red' }}>{formik.errors.id}</Text>
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
        <Text style={{ color: 'red' }}>{formik.errors.pw}</Text>
      )}
      <Pressable 
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
        disabled={ (formik.errors.id || formik.errors.pw) ? true : false }
      >
        <Text style={{ color: theme.colors.textWhite }}>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;