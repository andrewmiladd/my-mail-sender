import React, { useState } from "react";

export const InputEmails = () => {
    type stringState = [string, React.Dispatch<React.SetStateAction<string>>];
    const [email, setEmail]: stringState = useState("");
    let emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    return (
        <input
            type="email"
            multiple
            placeholder="Enter a valid email"
            required
            value={email}
            onChange={emailInputHandler}
        />
    );
};
