import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "./InputMessage.module.css";
interface MessageProp {
    className: string;

    setNewMessageFromParent: React.Dispatch<React.SetStateAction<string>>;
}
export const InputMessage = ({ setNewMessageFromParent, className }: MessageProp) => {
    const [message, setMessage] = useState("");
    const [isValidMessage, setIsValidMessage] = useState(true);

    let messageInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setNewMessageFromParent(e.target.value);
        setIsValidMessage(true);
    };

    let messageEventHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (["Enter", ",", "Tab"].includes(e.key)) {
            message.length < 1 && setIsValidMessage(false);
        }
    };

    return (
        <>
            <textarea
                cols={35}
                rows={10}
                className={`${styles.textarea} ${className}`}
                placeholder="Enter Your Message"
                value={message.trimStart()}
                onKeyDown={messageEventHandler}
                onChange={messageInputHandler}
            />
            {!isValidMessage && (
                <p style={{ color: "red", margin: "0" }}>*Please Enter a Message</p>
            )}
        </>
    );
};
