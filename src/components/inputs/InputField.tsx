import {FC} from "react"
import styles from "./index.module.scss"

type Props = {
    label: string;
    id: string;
    type?: string;
}

export const InputField: FC<Props> = ({label, id, type = "text"}) => {
    return (
            <div className={styles.inputFieldContainer}>
                <div className={styles.inputFieldHeader}>
                    <div className={styles.inputFieldLabel}>
                        <label htmlFor={id}>{label}</label>
                    </div>
                    <div className={styles.inputFieldError}>Error</div>
                </div>
                <div>
                    <input className={styles.inputField} id={id} type={type} />
                </div>
            </div>
    )
}