import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { EmailsList } from "./EmailsList";

export const InputEmails = () => {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];
    type arrayStringState = [string[], React.Dispatch<React.SetStateAction<string[]>>];

    const [newEmail, setNewEmail]: stringState = useState("");
    const [allEmails, setAllEmails]: arrayStringState = useState([newEmail]);

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };

    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ","].includes(e.key)) {
            e.preventDefault();
            if (newEmail.includes("@") && newEmail.includes(".")) {
                if (allEmails[0] === "") {
                    allEmails.shift();
                }
                setAllEmails([...allEmails, newEmail]);
                setNewEmail("");
            }
        }
    };

    return (
        <>
            <EmailsList mails={allEmails} setEmails={setAllEmails} />
            <input
                placeholder="Enter A valid email"
                value={newEmail.toLocaleLowerCase().trim()}
                onChange={onChangeHandler}
                onKeyDown={multipleMailsEventHandler}
            />
        </>
    );
};
