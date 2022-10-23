import formStyles from "../../../styles/forms.module.scss"
import inputStyles from "../../../styles/input.module.scss"
import {Button} from "../../buttons/AuthButton"
import { useForm } from "react-hook-form";
import {LoginFormFields} from "../../utils/types/form-fields"
import {UserNameField} from "./fields/UserNameField"
import {PasswordField} from "./fields/PasswordField"

export const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormFields>();
    console.log(errors)
    const onSubmit = (data: LoginFormFields) => {
        console.log(data)
    }
    return (
            <form className={formStyles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <UserNameField register={register} errors={errors.username} />
                <PasswordField register={register} errors={errors.password} />
                <Button type="submit">Sign In</Button>
            </form>
    )
}