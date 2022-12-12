import React from "react";
import { Button } from "@mui/material";
import styles from "./SignUpForm.module.css";
import { useFormik } from "formik";
import { signUpFormat } from "../Validation/Validation";
import axios from "axios";
import { UserNameInput } from "./UserNameInput";
import { EmailInput } from "../Shared Components/EmailInput";
import { PasswordInput } from "../Shared Components/PasswordInput";
import { ConfirmPassword } from "./ConfirmPassword";
import { Link } from "react-router-dom";

interface SignUpFields {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
let onSubmitHandler = (values: SignUpFields, actions: any) => {
    axios({
        method: "post",
        url: "http://localhost:8000/createUser",
        data: {
            username: values.username,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        },
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    actions.resetForm();
};
let myInitialValues: SignUpFields = { username: "", email: "", password: "", confirmPassword: "" };
export const SignUpForm = () => {
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: myInitialValues,
        onSubmit: onSubmitHandler,
        validationSchema: signUpFormat,
    });
    return (
        <form className={styles.mySignUpForm} onSubmit={handleSubmit}>
            <h2 className={styles.myHeader}>Sign Up</h2>
            <UserNameInput
                usernameValue={values.username}
                handleChange={handleChange}
                userNameErrors={errors.username}
                isTouched={touched.username}
                styles={`${styles.myErrorMessages}`}
            />
            <EmailInput
                emailValue={values.email}
                handleChange={handleChange}
                emailError={errors.email}
                isTouched={touched.email}
                styles={`${styles.myErrorMessages}`}
            />
            <PasswordInput
                passwordValue={values.password}
                handleChange={handleChange}
                passwordError={errors.password}
                isTouched={touched.password}
                styles={`${styles.myErrorMessages}`}
            />
            <ConfirmPassword
                confirmPasswordValue={values.confirmPassword}
                handleChange={handleChange}
                confirmPasswordError={errors.confirmPassword}
                isTouched={touched.confirmPassword}
                styles={`${styles.myErrorMessages}`}
            />
            <Button type="submit" variant="contained" id={styles.my__button}>
                Register
            </Button>
            <p className={styles.myMessage}>Have an account already?</p>
            <Link to={"/login"} className={styles.myMessage}>
                Sign in
            </Link>
        </form>
    );
};
