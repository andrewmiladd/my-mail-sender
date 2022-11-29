import React, { KeyboardEvent } from "react";

interface Props {
    classNameFromParent: string;
    emailValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    allEmails: string[];
    setAllEmails: React.Dispatch<React.SetStateAction<string[]>>;
    errors: string | undefined;
    touched: boolean | undefined;
}

export const InputEmails = ({
    classNameFromParent,
    emailValue,
    handleChange,
    allEmails,
    setAllEmails,
    errors,
    touched,
}: Props) => {
    let notRepeated = !allEmails.includes(emailValue);
    let isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(emailValue);

    let multipleMailsEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (["Enter", ","].includes(e.key)) {
            e.preventDefault();
            if (notRepeated && isEmail) {
                setAllEmails([...allEmails, emailValue]);
            }
        }
    };
    return (
        <>
            <input
                placeholder="Enter a valid email"
                value={emailValue}
                onChange={handleChange}
                id="email"
                onKeyDown={multipleMailsEventHandler}
                className={`${classNameFromParent}`}
            />
            {errors && touched && <p style={{ color: "red", margin: 0 }}>{errors}</p>}
        </>
    );
};
