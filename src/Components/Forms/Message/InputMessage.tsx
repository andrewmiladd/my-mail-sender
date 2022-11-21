import React from "react";
import styles from "./InputMessage.module.css";
interface MessageProp {
    className: string;
    messageValue: string;
    handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
export const InputMessage = ({ className, messageValue, handleChange }: MessageProp) => {
    return (
        <>
            <textarea
                cols={35}
                rows={10}
                className={`${styles.textarea} ${className}`}
                placeholder="Enter Your Message"
                id="message"
                value={messageValue}
                onChange={handleChange}
            />
        </>
    );
};
