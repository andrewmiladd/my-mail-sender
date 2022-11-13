import React, { FormEvent } from "react";
import styles from "./Forms.modules.css";
import { InputEmails } from "./InputEmails";
import { InputMessage } from "./InputMessage";

let formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};
export const FormSendMail = () => {
    return (
        <form onSubmit={formSubmitHandler}>
            <h1>Your Mail Sender</h1>
            <div className={styles.items}>
                <label> To </label>
                <InputEmails />

                <label>Your Message</label>
                <InputMessage />
            </div>
            <button type="submit">Send Your Message</button>
        </form>
    );
};
