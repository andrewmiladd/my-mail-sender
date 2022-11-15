import { FC } from "react";
interface ErrorProps {
    isValidate: boolean;
    notRepated: boolean;
}
export const ErrorMessages: FC<ErrorProps> = ({ isValidate, notRepated }) => {
    return (
        <>
            {!isValidate && (
                <p style={{ color: "red", margin: "0" }}>*Please enter a valid email</p>
            )}
            {!notRepated && (
                <p style={{ color: "red", margin: "0" }}>*This email is already exists</p>
            )}
        </>
    );
};
