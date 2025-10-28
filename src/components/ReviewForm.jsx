import { Pressable, TextInput, View } from "react-native"
import { useFormik } from "formik"
import { reviewFormSchema as validationSchema } from "../schemas"
import theme from "../theme"
import ThemedText from "./ThemedText"

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: ''
}

const ReviewForm = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={{ rowGap: 5 }}>
      <TextInput 
        placeholder="Repository owner name" 
        inputMode="text" 
        style={
          formik.errors.ownerName
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.ownerName}</ThemedText>
      )}

      <TextInput 
        placeholder="Repository name" 
        inputMode="text" 
        style={
          formik.errors.repositoryName
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.repositoryName}</ThemedText>
      )}

      <TextInput 
        placeholder="Rating between 0 and 100" 
        inputMode="decimal" 
        style={
          formik.errors.rating
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.rating}</ThemedText>
      )}

      <TextInput 
        placeholder="Review" 
        inputMode="text" 
        style={
          formik.errors.text
            ? theme.formStyle.textInputError
            : theme.formStyle.textInputNormal
        }
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        multiline
      /> 
      {formik.touched.text && formik.errors.text && (
        <ThemedText style={{ color: 'red' }}>{formik.errors.text}</ThemedText>
      )}

      <Pressable
        onPress={formik.handleSubmit}
        style={{ backgroundColor: theme.colors.primary, alignItems: "center", padding: 5 }}
        disabled={ (formik.errors.ownerName || formik.errors.rating || formik.errors.repositoryName) ? true : false }
      >
        <ThemedText style={{ color: theme.colors.textWhite }}>Create a review</ThemedText>
      </Pressable>
    </View>
  )
}

export default ReviewForm