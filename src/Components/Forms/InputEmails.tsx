import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";
import { ErrorMessages } from "./ErrorMessages";

//Adding the data to FormSendMail Component
interface Props {
    loggerDataOnSuccess: React.Dispatch<React.SetStateAction<string[]>>;
}
export const InputEmails = ({ loggerDataOnSuccess }: Props) => {
    const [newEnteredEmail, setNewEnteredEmail] = useState("");
    const [allEmails, setAllEmails] = useState([] as string[]);
    const [isEmailState, setIsEmailState] = useState(true);
    const [notRepeatedState, setNotRepeatedState] = useState(true);

    let onNewEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEnteredEmail(e.target.value);
        setIsEmailState(true);
        setNotRepeatedState(true);
    };
    let isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newEnteredEmail); //Email format validation
    let notRepeated = !allEmails.includes(newEnteredEmail); // To make sure there is not any repeated emails

    let formValidation = () => {
        if (isEmail && notRepeated) {
            setAllEmails([...allEmails, newEnteredEmail.toLocaleLowerCase()]);
            setNewEnteredEmail("");
            setIsEmailState(true);
            setNotRepeatedState(true);
            loggerDataOnSuccess([...allEmails, newEnteredEmail.toLocaleLowerCase()]);
        } else if (!notRepeated) {
            setNotRepeatedState(false);
        } else {
            setIsEmailState(false);
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
            <ErrorMessages isEmail={isEmailState} notRepeated={notRepeatedState} />
        </>
    );
};
