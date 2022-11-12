import React from "react";
import { FormSendMail } from "./Components/Forms/FormSendMail";
import "./App.css";
import { Container } from "./Components/Core/Container";

function App() {
    return (
        <div>
            <Container>
                <FormSendMail />
            </Container>
        </div>
    );
}

export default App;
