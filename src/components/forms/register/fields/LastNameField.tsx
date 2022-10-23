import {FC} from "react"
import inputStyles from "../../../../styles/input.module.scss"
import {FieldError, UseFormRegister} from "react-hook-form"
import {RegisterFormFields} from "../../../../utils/types/form-fields"

type Props = {
    register: UseFormRegister<RegisterFormFields>;
    errors?: FieldError;
}

export const LastNameField: FC<Props> = ({register, errors}) => {
    return (
            <div className={inputStyles.inputFieldContainer}>
                        <div className={inputStyles.inputFieldHeader}>
                            <div className={inputStyles.inputFieldLabel}>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            {errors && <div className={inputStyles.inputFieldError}>{errors.message}</div>}
                        </div>
                        <div>
                            <input id="lastName" className={inputStyles.inputField} {...register("lastName", {required: "Required", maxLength: {value: 24, message: "Max 24 characters"}})}/>
                        </div>
            </div>
            )
}