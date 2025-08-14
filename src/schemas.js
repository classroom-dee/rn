import * as yup from 'yup';

const validationSchema = yup.object().shape({
  id: yup
    .string()
    .required('ID is required')
    .matches(
      /^[A-Za-z][A-Za-z0-9.@_-]{2,15}$/,
      "Must start with a letter, 3 <= length <= 16. Allowed: @, ., -, _"
    ),
  pw: yup
    .string()
    .required("PW is required")
    .matches(
      /^[^\s]{8,32}$/,
      "Must have no spaces, 8 <= length <= 32"
    )
});

export default validationSchema