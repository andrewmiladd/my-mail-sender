import React from "react";
import { TextField } from "@mui/material";
interface Props {
    confirmPasswordValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    confirmPasswordError: string | undefined;
    isTouched: boolean | undefined;
    styles: string;
}

export const ConfirmPassword = ({
    confirmPasswordValue,
    handleChange,
    confirmPasswordError,
    isTouched,
    styles,
}: Props) => {
    return (
        <>
            <TextField
                type="password"
                label="Confirm Password"
                id="confirmPassword"
                sx={{ m: 1 }}
                size={"small"}
                value={confirmPasswordValue}
                onChange={handleChange}
            />
            {confirmPasswordError && isTouched && <p className={styles}>{confirmPasswordError}</p>}
        </>
    );
};
