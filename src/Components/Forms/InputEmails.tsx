import React, { useState, ChangeEvent, KeyboardEvent } from "react";

export const InputEmails = () => {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];

    const [newEmail, setNewEmail]: stringState = useState("");
    const [allEmails, setAllEmails] = useState([newEmail]);

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

    console.log(allEmails);
    return (
        <>
            {allEmails.map(email => (
                <p>{email}</p>
            ))}
            <input
                placeholder="Enter A valid email"
                value={newEmail.trim()}
                onChange={onChangeHandler}
                onKeyDown={multipleMailsEventHandler}
            />
        </>
    );
};
