import {FC} from "react"
import styles from "./index.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({children}) => {
    return (
            <button className={styles.authButton}>{children}</button>
    )
}
