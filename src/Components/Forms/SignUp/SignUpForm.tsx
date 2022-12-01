import React from "react";
import { Button, TextField } from "@mui/material";
import style from "./SignUpForm.module.css";
import { useFormik } from "formik";
import { signUpFormat } from "../Validation/Validation";
import axios from "axios";

interface SignUpFields {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
let onSubmitHandler = (values: SignUpFields, actions: any) => {
    axios({
        method: "POST",
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
        <form className={style.mySignUpForm} onSubmit={handleSubmit}>
            <h2 className={style.myHeader}>Sign Up</h2>
            <TextField
                type="text"
                label="Username"
                id="username"
                sx={{ m: 1 }}
                value={values.username}
                onChange={handleChange}
            />
            {errors.username && touched.username && (
                <p className={style.myErrorMessages}>{errors.username}</p>
            )}
            <TextField
                type="text"
                label="Email"
                sx={{ m: 1 }}
                value={values.email}
                id="email"
                onChange={handleChange}
            />
            {errors.email && touched.email && (
                <p className={style.myErrorMessages}>{errors.email}</p>
            )}
            <TextField
                type="password"
                label="Password"
                sx={{ m: 1 }}
                value={values.password}
                id="password"
                onChange={handleChange}
            />
            {errors.password && touched.password && (
                <p className={style.myErrorMessages}>{errors.password}</p>
            )}
            <TextField
                type="password"
                label="Confirm Password"
                id="confirmPassword"
                sx={{ m: 1 }}
                value={values.confirmPassword}
                onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword && (
                <p className={style.myErrorMessages}>{errors.confirmPassword}</p>
            )}
            <Button type="submit" variant="contained">
                Register
            </Button>
        </form>
    );
};
