import {InputField} from "../inputs/InputField"
import styles from "./index.module.scss"
import {Button} from "./../buttons/AuthButton"

export const RegisterForm = () => {
    return (
            <form className={styles.registerForm}>
                <div className={styles.nameContainer}>
                    <InputField label="First Name" id="firstName" />
                    <InputField label="Last Name" id="lastName" />
                </div>
                <InputField label="Username" id="username" />
                <InputField label="Password" id="password" type="password" />
                <Button>Create Account</Button>
            </form>
    )
}