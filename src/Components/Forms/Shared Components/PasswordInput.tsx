import React from "react";
import { TextField } from "@mui/material";
interface Props {
    passwordValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    passwordError: string | undefined;
    isTouched: boolean | undefined;
    styles: string;
}
export const PasswordInput = ({
    passwordValue,
    handleChange,
    passwordError,
    isTouched,
    styles,
}: Props) => {
    return (
        <>
            <TextField
                type="password"
                label="Password"
                id="password"
                sx={{ m: 1 }}
                value={passwordValue}
                onChange={handleChange}
            />
            {passwordError && isTouched && <p className={styles}>{passwordError}</p>}
        </>
    );
};
