import {FC} from "react"
import inputStyles from "../../../../styles/input.module.scss"
import {FieldError, UseFormRegister} from "react-hook-form"
import {RegisterFormFields} from "../../../../utils/types/form-fields"

type Props = {
    register: UseFormRegister<RegisterFormFields>;
    errors?: FieldError;
}

export const PasswordField: FC<Props> = ({register, errors}) => {
    return (
            <div className={inputStyles.inputFieldContainer}>
                    <div className={inputStyles.inputFieldHeader}>
                        <div className={inputStyles.inputFieldLabel}>
                            <label htmlFor="password">Password</label>
                        </div>
                        {errors && <div className={inputStyles.inputFieldError}>{errors.message}</div>}
                    </div>
                    <div>
                        <input id="password" className={inputStyles.inputField} type="password" {...register("password", {required: "Required", minLength: {value: 6, message: "Min 6 characters"}, maxLength: {value: 32, message: "Max 32 characters"}})}/>
                    </div>
            </div>
            )
}