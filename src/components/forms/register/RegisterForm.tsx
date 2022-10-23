import formStyles from "../../../styles/forms.module.scss"
import {Button} from "./../../buttons/AuthButton"
import { useForm } from "react-hook-form";
import {RegisterFormFields} from "../../utils/types/form-fields"
import inputStyles from "../../../styles/input.module.scss"
import {FirstNameField} from "./fields/FirstNameField"
import {LastNameField} from "./fields/LastNameField"
import {UserNameField} from "./fields/UserNameField"
import {PasswordField} from "./fields/PasswordField"

export const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormFields>();
    console.log(errors)
    const onSubmit = (data: RegisterFormFields) => console.log(data);
    return (
            <form className={formStyles.registerForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={formStyles.nameContainer}>
                    <FirstNameField register={register} errors={errors.firstName} />
                    <LastNameField register={register} errors={errors.lastName} />
                </div>
                <UserNameField register={register} errors={errors.username} />
                <PasswordField register={register} errors={errors.password} />
                <Button type="submit">Create Account</Button>
            </form>
    )
}