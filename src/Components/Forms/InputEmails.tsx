import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";
import { ErrorMessages } from "./ErrorMessages";

export const InputEmails = (props: any) => {
    const [newEnteredEmail, setNewEnteredEmail] = useState("");
    const [allEmails, setAllEmails] = useState([] as string[]);
    const [isValidState, setIsValidState] = useState(true);
    const [notRepatedState, setNotRepeatedState] = useState(true);

    let onNewEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEnteredEmail(e.target.value);
        setIsValidState(true);
        setNotRepeatedState(true);
    };
    
    let isValid = /\S+@\S+\.\S+/.test(newEnteredEmail) && !newEnteredEmail.includes("." && "#", 0);
    let notRepated = !allEmails.includes(newEnteredEmail);

    let formValidation = () => {
        if (isValid && notRepated) {
            setAllEmails([...allEmails, newEnteredEmail]);
            setNewEnteredEmail("");
            setIsValidState(true);
            setNotRepeatedState(true);
        } else if (!notRepated) {
            setNotRepeatedState(false);
        } else {
            setIsValidState(false);
        }
    };
    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ",", "Tab"].includes(e.key)) {
            e.preventDefault();
            formValidation();
        }
    };
    return (
        <>
            <EmailsList mails={allEmails} setEmails={setAllEmails} />
            <input
                placeholder="Enter a valid email"
                value={newEnteredEmail.toLocaleLowerCase().trim()}
                onChange={onNewEmailChangeHandler}
                onKeyDown={multipleMailsEventHandler}
            />
            <ErrorMessages isValidate={isValidState} notRepated={notRepatedState} />
        </>
    );
};
