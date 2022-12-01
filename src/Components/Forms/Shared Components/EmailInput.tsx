import React from "react";
import { TextField } from "@mui/material";

interface Props {
    emailValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    emailError: string | undefined;
    isTouched: boolean | undefined;
    styles: string;
}
export const EmailInput = ({ emailValue, handleChange, emailError, isTouched, styles }: Props) => {
    return (
        <>
            <TextField
                type="text"
                label="Email"
                id="email"
                sx={{ m: 1 }}
                value={emailValue}
                onChange={handleChange}
            />
            {emailError && isTouched && <p className={styles}>{emailError}</p>}
        </>
    );
};
