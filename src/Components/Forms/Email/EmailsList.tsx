import styles from "./EmailsList.module.css";

interface Props {
    mails: string[];
    setEmails: React.Dispatch<React.SetStateAction<string[]>>;
    listUpdaterOnTheConsole: React.Dispatch<React.SetStateAction<string[]>>;
}
export const EmailsList = ({ mails, setEmails, listUpdaterOnTheConsole }: Props) => {
    let onDeleteHandler = (toBeRemoved: string) => {
        setEmails(mails.filter(e => e !== toBeRemoved));
        listUpdaterOnTheConsole(mails.filter(e => e !== toBeRemoved));
    };
    return (
        <div className={styles.list}>
            {mails.map(email => (
                <p key={email}>
                    {email}
                    <button
                        type="button"
                        onClick={() => onDeleteHandler(email)}
                        className={styles.my__button}
                    >
                        &times;
                    </button>
                </p>
            ))}
        </div>
    );
};
