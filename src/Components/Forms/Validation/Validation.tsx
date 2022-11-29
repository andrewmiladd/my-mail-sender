import * as yup from "yup";

export const formFormat = yup.object().shape({
    email: yup.string().email("*Please enter a valid email").required("*This field is required"),
    message: yup.string().required("*Please Enter a message"),
});
