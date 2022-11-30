import * as yup from "yup";

export const formFormat = yup.object().shape({
    email: yup.string().email("*Please enter a valid email").required("*This field is required"),
    message: yup.string().required("*Please Enter a message"),
});
export const signUpFormat = yup.object().shape({
    username: yup.string().required("Please Enter a username"),
    email: yup.string().email("Please enter a valid email").required("*This field is required"),
    password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export const loginFormat = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("*This field is required"),
    password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum."),
});
