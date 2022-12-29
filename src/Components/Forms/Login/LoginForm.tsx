import React from "react";
import { Button } from "@mui/material";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import { loginFormat } from "../Validation/Validation";
import { EmailInput } from "../Shared Components/EmailInput";
import { PasswordInput } from "../Shared Components/PasswordInput";
import axios from "axios";
import { Link } from "react-router-dom";

interface LogInFields {
    email: string;
    password: string;
}
let myInitialValues: LogInFields = { email: "", password: "" };
export const LogInForm = () => {
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: myInitialValues,
        onSubmit: values => {
            axios
                .post("https://mail-sender-nestjs-production.up.railway.app/auth", {
                    email: values.email,
                    password: values.password,
                })
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem("token", response.data.access_token);
                        window.location.href = "/";
                    }
                })
                .catch(error => console.log(error));
        },
        validationSchema: loginFormat,
    });
    return (
        <form className={styles.myLogInForm} onSubmit={handleSubmit}>
            <h2 className={styles.myHeader}>Log in</h2>
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
            <p className={styles.myMessage}>
                Don't have an account?
                <Link to="/signUp" className={styles.myMessage} style={{ marginLeft: "7px" }}>
                    Sign up
                </Link>
            </p>
        </form>
    );
};
