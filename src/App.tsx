import React from "react";
import { FormSendMail } from "./Components/Forms/FormSendMail";
import { Container } from "./Components/Core/Container";
import { SignUpForm } from "./Components/Forms/SignUp/SignUpForm";
import { Route, Routes } from "react-router-dom";
import { LogInForm } from "./Components/Forms/Login/LoginForm";

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<FormSendMail />} />
                <Route path="SignUp" element={<SignUpForm />} />
                <Route path="login" element={<LogInForm />} />
            </Routes>
        </Container>
    );
};
