import React, { useState } from "react";
import styles from "./FormSendMail.module.css";
import { InputEmails } from "./Email/InputEmails";
import { InputMessage } from "./Message/InputMessage";
import { useFormik, FormikProps } from "formik";
import { formFormat } from "./Validation/Validation";

export const FormSendMail = () => {
    //Adding the States to receive data from children components
    const [allEmails, setAllEmails] = useState([] as string[]);
    const [newMessage, setNewMessage] = useState("");

    interface myValues {
        email: string;
    }

    let newEmail: myValues = { email: "" };
    let onSubmit = (values: any, actions: any) => {
        console.log(allEmails, newMessage);
        console.log(values);
        actions.resetForm();
    };

    const { values, errors, handleChange, handleSubmit, touched }: FormikProps<myValues> =
        useFormik({
            initialValues: newEmail,
            onSubmit: onSubmit,
            validationSchema: formFormat,
        });
    console.log(errors);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Your Mail Sender</h1>
            <label className={styles.myLabel}> To </label>
            <InputEmails
                loggerDataOnSuccess={setAllEmails}
                classNameFromParent={`${styles.myInput} ${
                    errors.email && touched.email ? styles.inputError : ""
                }`}
                emailValue={values.email}
                handleChange={handleChange}
            />
            {errors.email && touched.email && (
                <p style={{ color: "red", margin: 0 }}>*{errors.email}</p>
            )}
            <label className={styles.myLabel}>Your Message</label>
            <InputMessage
                className={`${styles.inputMessage}`}
                setNewMessageFromParent={setNewMessage}
            />
            <button type="submit" className={styles.myButton}>
                Send Your Message
            </button>
        </form>
    );
};
