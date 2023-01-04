import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import { loginFormat } from "../Validation/Validation";
import { EmailInput } from "../Shared Components/EmailInput";
import { PasswordInput } from "../Shared Components/PasswordInput";
import axios from "axios";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface LogInFields {
    email: string;
    password: string;
}
let myInitialValues: LogInFields = { email: "", password: "" };
export const LogInForm = () => {
    const [isRightCredentials, setIsRightCredentials] = useState(true);

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
                .catch(error => {
                    console.log(error);
                    setIsRightCredentials(false);
                });
        },
        validationSchema: loginFormat,
    });

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            {!isRightCredentials && (
                <Stack spacing={4} sx={{ width: "100%" }}>
                    <Snackbar
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        autoHideDuration={6000}
                    >
                        <Alert onClose={handleClose} severity="error" sx={{ width: "500px" }}>
                            Wrong credentials
                        </Alert>
                    </Snackbar>
                </Stack>
            )}

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

                <Button
                    type="submit"
                    variant="contained"
                    id={styles.my__button}
                    onClick={handleClick}
                >
                    Login
                </Button>
                <p className={styles.myMessage}>
                    Don't have an account?
                    <Link to="/signUp" className={styles.myMessage} style={{ marginLeft: "7px" }}>
                        Sign up
                    </Link>
                </p>
            </form>
        </>
    );
};
