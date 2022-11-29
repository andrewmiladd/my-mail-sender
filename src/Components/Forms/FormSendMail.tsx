import React, { useState } from "react";
import styles from "./FormSendMail.module.css";
import { InputEmails } from "./Email/InputEmails";
import { InputMessage } from "./Message/InputMessage";
import { useFormik } from "formik";
import { formFormat } from "./Validation/Validation";
import { EmailsList } from "./Email/EmailsList";
import axios from "axios";

interface FormFields {
    email: string;
    message: string;
}
let myInitialValues: FormFields = { email: "", message: "" };

export const FormSendMail = () => {
    const [allEmails, setAllEmails] = useState([] as string[]);

    let onSubmitHandler = (values: FormFields, actions: any) => {
        let displayedEmails = allEmails.length === 0 ? values.email : [...allEmails];
        axios
            .post("http://localhost:8000/sendEmail", {
                email: displayedEmails,
                message: values.message,
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
        setAllEmails([]);
        actions.resetForm();
    };

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: myInitialValues,
        onSubmit: onSubmitHandler,
        validationSchema: allEmails.length === 0 ? formFormat : "",
    });

    return (
        <form onSubmit={handleSubmit}>
            <h1>Your Mail Sender</h1>
            <label className={styles.myLabel}> To </label>
            <EmailsList mails={allEmails} setEmails={setAllEmails} />
            <InputEmails
                allEmails={allEmails}
                setAllEmails={setAllEmails}
                classNameFromParent={`${styles.myInput} `}
                emailValue={values.email}
                handleChange={handleChange}
                errors={errors.email}
                touched={touched.email}
            />
            <label className={styles.myLabel}>Your Message</label>
            <InputMessage
                className={`${styles.inputMessage}`}
                messageValue={`${values.message}`}
                handleChange={handleChange}
                errors={errors.message}
                touched={touched.message}
            />
            <button type="submit" className={styles.myButton}>
                Send Your Message
            </button>
        </form>
    );
};
