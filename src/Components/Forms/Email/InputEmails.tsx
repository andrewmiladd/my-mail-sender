import React, { KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";

interface Props {
    loggerDataOnSuccess: React.Dispatch<React.SetStateAction<string[]>>;
    classNameFromParent: string;
    emailValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    allEmails: string[];
    setAllEmails: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InputEmails = ({
    loggerDataOnSuccess,
    classNameFromParent,
    emailValue,
    handleChange,
    allEmails,
    setAllEmails,
}: Props) => {
    let notRepeated = !allEmails.includes(emailValue);
    let isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(emailValue);

    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ","].includes(e.key)) {
            e.preventDefault();
            if (notRepeated && isEmail) {
                setAllEmails([...allEmails, emailValue]);
            }
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
                value={emailValue}
                onChange={handleChange}
                id="email"
                onKeyDown={multipleMailsEventHandler}
                className={`${classNameFromParent}`}
            />
        </>
    );
};
