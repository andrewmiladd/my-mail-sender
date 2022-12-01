import React from "react";
import { Button, TextField } from "@mui/material";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import { loginFormat } from "../Validation/Validation";

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
            <TextField
                type="text"
                label="Email"
                id="email"
                value={values.email}
                onChange={handleChange}
                sx={{ m: 1 }}
            />
            {errors.email && touched.email && (
                <p className={styles.myErrorMessages}> {errors.email}</p>
            )}
            <TextField
                type="password"
                label="Password"
                id="password"
                value={values.password}
                onChange={handleChange}
                sx={{ m: 1 }}
            />
            {errors.password && touched.password && (
                <p className={styles.myErrorMessages}> {errors.password}</p>
            )}
            <Button type="submit" variant="contained" id={styles.my__button}>
                Login
            </Button>
        </form>
    );
};
