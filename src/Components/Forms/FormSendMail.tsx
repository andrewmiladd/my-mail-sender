import React from "react";
import styles from "./Forms.modules.css";
import { InputEmails } from "./InputEmails";
import { InputMessage } from "./InputMessage";

export const FormSendMail = () => {
    return (
        <form>
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
