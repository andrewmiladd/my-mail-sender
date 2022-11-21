import React, { FormEvent, useState } from "react";
import styles from "./FormSendMail.module.css";
import { InputEmails } from "./InputEmails";
import { InputMessage } from "./InputMessage";

export const FormSendMail = () => {
    //Adding the States to receive data from children components
    const [allEmails, setAllEmails] = useState([] as string[]);
    const [newMessage, setNewMessage] = useState("");

    let formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (allEmails.length > 0 && newMessage.trim().length > 0) {
            console.log([...allEmails, { message: newMessage }]);
        } else {
            console.log("Error, Form Refused!");
            return false;
        }
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <h1>Your Mail Sender</h1>
            <div className={styles.items}>
                <label className={styles.myLabel}> To </label>
                <InputEmails loggerDataOnSuccess={setAllEmails} classNameFromParent={styles.myInput} />
                <label className={styles.myLabel}>Your Message</label>
                <InputMessage
                    className={styles.inputMessage}
                    setNewMessageFromParent={setNewMessage}
                />
            </div>
            <button type="submit" className={styles.myButton}>Send Your Message</button>
        </form>
    );
};
