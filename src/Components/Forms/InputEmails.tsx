import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";

export const InputEmails = () => {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];
    type arrayStringState = [string[], React.Dispatch<React.SetStateAction<string[]>>];

    const [newEnteredEmail, setNewEnteredEmail]: stringState = useState("");
    const [allEmails, setAllEmails]: arrayStringState = useState([] as string[]);
    const [isValidState, setIsValidState] = useState(true);
    const [notRepeatedState, setNotRepeatedState] = useState(true);

    let onNewEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEnteredEmail(e.target.value);
        setIsValidState(true);
        setNotRepeatedState(true);
    };
    let isValid =
        newEnteredEmail.includes("@") &&
        newEnteredEmail.includes(".") &&
        !newEnteredEmail.includes("@", newEnteredEmail.length - 1) &&
        !newEnteredEmail.includes(".", newEnteredEmail.length - 1);

    let notRepated = !allEmails.includes(newEnteredEmail);

    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ",", "Tab"].includes(e.key)) {
            e.preventDefault();
            if (isValid && notRepated) {
                setAllEmails([...allEmails, newEnteredEmail]);
                setNewEnteredEmail("");
            } else if (!notRepated) {
                setNotRepeatedState(false);
            } else {
                setIsValidState(false);
            }
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
            {!isValidState && (
                <p style={{ color: "red", margin: "0" }}>*please enter a valid email</p>
            )}
            {!notRepeatedState && (
                <p style={{ color: "red", margin: "0" }}>*this email is already taken</p>
            )}
        </>
    );
};
