import React, { useState } from "react";
import styles from "./FormSendMail.module.css";
import { InputEmails } from "./Email/InputEmails";
import { InputMessage } from "./Message/InputMessage";
import { useFormik } from "formik";
import { formFormat } from "./Validation/Validation";

export const FormSendMail = () => {
    const [allEmails, setAllEmails] = useState([] as string[]);

    let onSubmit = (values: any, actions: any) => {
        console.log([...allEmails, { message: values.message }]);
        setAllEmails([]);
        actions.resetForm();
    };

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: { email: "", message: "" },
        onSubmit: onSubmit,
        validationSchema: formFormat,
    });

    return (
        <form onSubmit={handleSubmit}>
            <h1>Your Mail Sender</h1>
            <label className={styles.myLabel}> To </label>
            <InputEmails
                allEmails={allEmails}
                setAllEmails={setAllEmails}
                loggerDataOnSuccess={setAllEmails}
                classNameFromParent={`${styles.myInput} ${
                    errors.email && touched.email ? styles.inputError : ""
                }`}
                emailValue={values.email}
                handleChange={handleChange}
            />
            {errors.email && touched.email && (
                <p style={{ color: "red", margin: 0 }}>{errors.email}</p>
            )}
            <label className={styles.myLabel}>Your Message</label>
            <InputMessage
                className={`${styles.inputMessage}`}
                messageValue={`${values.message}`}
                handleChange={handleChange}
            />
            {errors.message && touched.message && (
                <p style={{ color: "red", margin: 0 }}>{errors.message}</p>
            )}
            <button type="submit" className={styles.myButton}>
                Send Your Message
            </button>
        </form>
    );
};
