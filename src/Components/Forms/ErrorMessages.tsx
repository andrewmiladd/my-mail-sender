import { FC } from "react";
interface ErrorProps {
    isEmail: boolean;
    notRepated: boolean;
}
export const ErrorMessages: FC<ErrorProps> = ({ isEmail, notRepated }) => {
    return (
        <>
            {!isEmail && (
                <p style={{ color: "red", margin: "0" }}>*Please enter a valid email</p>
            )}
            {!notRepated && (
                <p style={{ color: "red", margin: "0" }}>*This email already exists</p>
            )}
        </>
    );
};
