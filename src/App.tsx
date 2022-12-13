import React from "react";
import { FormSendMail } from "./Components/Forms/FormSendMail";
import { Container } from "./Components/Core/Container";
import { SignUpForm } from "./Components/Forms/SignUp/SignUpForm";
import { Route, Routes } from "react-router-dom";
import { LogInForm } from "./Components/Forms/Login/LoginForm";
import { PrivateRoutes } from "./Components/Core/PrivateEmailRoute";
import { PrivateLoginRoute } from "./Components/Core/PrivateLogin";
import { PrivateSignUpRoute } from "./Components/Core/PrivateSignUp";

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<FormSendMail />} />
                </Route>
                <Route element={<PrivateLoginRoute />}>
                    <Route path="login" element={<LogInForm />} />
                </Route>
                <Route element={<PrivateSignUpRoute />}>
                    <Route path="SignUp" element={<SignUpForm />} />
                </Route>
            </Routes>
        </Container>
    );
};
