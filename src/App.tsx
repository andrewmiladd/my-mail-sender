import React from "react";
import { FormSendMail } from "./Components/Forms/FormSendMail";
import { Container } from "./Components/Core/Container";
import { SignUpForm } from "./Components/Forms/SignUp/SignUpForm";
import { Route, Routes } from "react-router-dom";
import { LogInForm } from "./Components/Forms/Login/LoginForm";
import { PrivateRoutes } from "./Components/Core/PrivateRoute";

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<FormSendMail />} />
                </Route>

                <Route path="SignUp" element={<SignUpForm />} />
                <Route path="login" element={<LogInForm />} />
            </Routes>
        </Container>
    );
};
