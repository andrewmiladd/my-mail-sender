import { FC } from "react";
interface ErrorProps {
    isEmail: boolean;
    notRepeated: boolean;
}
export const ErrorMessages: FC<ErrorProps> = ({ isEmail, notRepeated }) => {
    return (
        <>
            {!isEmail && <p style={{ color: "red", margin: "0" }}>*Please enter a valid email</p>}
            {!notRepeated && (
                <p style={{ color: "red", margin: "0" }}>*This email already exists</p>
            )}
        </>
    );
};
