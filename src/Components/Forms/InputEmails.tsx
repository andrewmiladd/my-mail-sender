import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";
import { ErrorMessages } from "./ErrorMessages";

//Adding the data to FormSendEmail Component
interface Props {
    loggerDataOnSuccess: React.Dispatch<React.SetStateAction<string[]>>;
}
export const InputEmails = ({ loggerDataOnSuccess }: Props) => {
    const [newEnteredEmail, setNewEnteredEmail] = useState("");
    const [allEmails, setAllEmails] = useState([] as string[]);
    const [isValidState, setIsValidState] = useState(true);
    const [notRepatedState, setNotRepeatedState] = useState(true);

    let onNewEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEnteredEmail(e.target.value);
        setIsValidState(true);
        setNotRepeatedState(true);
    };
    let isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newEnteredEmail); //Email format validation
    let notRepated = !allEmails.includes(newEnteredEmail); // To ensure there is not any used emails

    let formValidation = () => {
        if (isValid && notRepated) {
            setAllEmails([...allEmails, newEnteredEmail.toLocaleLowerCase()]);
            setNewEnteredEmail("");
            setIsValidState(true);
            setNotRepeatedState(true);
            loggerDataOnSuccess([...allEmails, newEnteredEmail.toLocaleLowerCase()]);
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
            <EmailsList
                mails={allEmails}
                setEmails={setAllEmails}
                listUpdaterOnTheConsole={loggerDataOnSuccess}
            />
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
