import React, { useState } from "react";
import styles from "./Forms.modules.css";

export function FormSendMail() {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];

    const [email, setEmail]: stringState = useState("");
    const [message, setMessage]: stringState = useState("");

    let emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    let messageInputhandler = (e: any) => {
        setMessage(e.target.value);
    };

    return (
        <form>
            <h1>Your Mail Sender</h1>
            <div className={styles.items}>
                <label> To </label>
                <input
                    type="email"
                    multiple
                    placeholder="Enter a valid email"
                    required
                    value={email}
                    onChange={emailInputHandler}
                />
            </div>
            <label>Your Message</label>
            <textarea
                cols={35}
                rows={10}
                placeholder="Enter Your Message"
                required
                value={message}
                onChange={messageInputhandler}
            ></textarea>

            <button type="submit">Send Your Message</button>
        </form>
    );
}
