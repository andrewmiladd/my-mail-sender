import React, { useState, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";

//Adding the data to FormSendMail Component
interface Props {
    loggerDataOnSuccess: React.Dispatch<React.SetStateAction<string[]>>;
    classNameFromParent: string;
    emailValue: string;
    handleChange: any;
}

export const InputEmails = ({
    loggerDataOnSuccess,
    classNameFromParent,
    emailValue,
    handleChange,
}: Props) => {
    const [allEmails, setAllEmails] = useState([] as string[]);
    
    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ",", "Tab"].includes(e.key)) {
            e.preventDefault();
            setAllEmails([...allEmails, emailValue]);
            loggerDataOnSuccess([...allEmails, emailValue]);
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
