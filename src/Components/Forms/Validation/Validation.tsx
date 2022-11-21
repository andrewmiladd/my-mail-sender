import * as yup from 'yup';

export const formFormat = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("this field is required")
})