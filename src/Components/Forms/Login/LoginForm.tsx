import React from "react";
import { Button, TextField } from "@mui/material";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import { loginFormat } from "../Validation/Validation";
import { EmailInput } from "../Shared Components/EmailInput";
import { PasswordInput } from "../Shared Components/PasswordInput";

interface LogInFields {
    email: string;
    password: string;
}
let myInitialValues: LogInFields = { email: "", password: "" };
export const LogInForm = () => {
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: myInitialValues,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
        validationSchema: loginFormat,
    });
    return (
        <form className={styles.myLogInForm} onSubmit={handleSubmit}>
            <h2 className={styles.myHeader}>Login</h2>
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

            <Button type="submit" variant="contained" id={styles.my__button}>
                Login
            </Button>
        </form>
    );
};
