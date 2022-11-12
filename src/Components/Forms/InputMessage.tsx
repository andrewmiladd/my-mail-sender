import React, { useState } from "react";

export const InputMessage = () => {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];

    const [message, setMessage]: stringState = useState("");

    let messageInputhandler = (e: any) => {
        setMessage(e.target.value);
    };

    return (
        <textarea
            cols={35}
            rows={10}
            placeholder="Enter Your Message"
            required
            value={message}
            onChange={messageInputhandler}
        />
    );
};
