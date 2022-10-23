import {FC} from "react"
import inputStyles from "../../../../styles/input.module.scss"
import {FieldError, UseFormRegister} from "react-hook-form"
import {RegisterFormFields} from "../../../../utils/types/form-fields"

type Props = {
    register: UseFormRegister<RegisterFormFields>;
    errors?: FieldError;
}

export const UserNameField: FC<Props> = ({register, errors}) => {
    return (
            <div className={inputStyles.inputFieldContainer}>
                    <div className={inputStyles.inputFieldHeader}>
                        <div className={inputStyles.inputFieldLabel}>
                            <label htmlFor="username">Username</label>
                        </div>
                        {errors && <div className={inputStyles.inputFieldError}>{errors.message}</div>}
                    </div>
                    <div>
                        <input id="username" className={inputStyles.inputField} {...register("username", {required: "Required", maxLength: {value: 24, message: "Max 24 characters"}})}/>
                    </div>
            </div>
            )
}