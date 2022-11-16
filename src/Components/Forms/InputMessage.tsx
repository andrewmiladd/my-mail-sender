import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface MessageProp {
    setNewMessageFromParent: React.Dispatch<React.SetStateAction<string>>;
}
export const InputMessage = ({ setNewMessageFromParent }: MessageProp) => {
    const [message, setMessage] = useState("");
    const [isValidMessage, setIsValidMessage] = useState(true);

    let messageInputhandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                placeholder="Enter Your Message"
                value={message.trimStart()}
                onKeyDown={messageEventHandler}
                onChange={messageInputhandler}
                style={{ border: "1px solid" }}
            />
            {!isValidMessage && (
                <p style={{ color: "red", margin: "0" }}>*Please Enter a Message</p>
            )}
        </>
    );
};
