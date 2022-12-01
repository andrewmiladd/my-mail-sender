import React from "react";
import { TextField } from "@mui/material";

interface Props {
    usernameValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    userNameErrors: string | undefined;
    isTouched: boolean | undefined;
    styles: string;
}
export const UserNameInput = ({
    usernameValue,
    handleChange,
    userNameErrors,
    isTouched,
    styles,
}: Props) => {
    return (
        <>
            <TextField
                type="text"
                label="Username"
                id="username"
                sx={{ m: 1 }}
                value={usernameValue}
                onChange={handleChange}
            />
            {userNameErrors && isTouched && <p className={styles}>{userNameErrors}</p>}
        </>
    );
};
