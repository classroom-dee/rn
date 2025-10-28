import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('ID is required')
    .matches(
      /^[A-Za-z][A-Za-z0-9.@_-]{2,15}$/,
      "Must start with a letter, 3 <= length <= 16. Allowed: @, ., -, _"
    ),
  password: yup
    .string()
    .required("PW is required")
    .matches(
      /^[^\s]{5,32}$/,
      "Must have no spaces, 5 <= length <= 32"
    )
});

export const reviewFormSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Owner name is required'),
  rating: yup
    .number()
    .min(0, "Must be at least 0")
    .max(100, "Cannot exceed 100")
    .required("Rating is required"),
  repositoryName: yup
    .string().required("Repository name is required"),
  text: yup
    .string().optional()
})

export default validationSchema