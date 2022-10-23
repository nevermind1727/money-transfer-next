import {NextPage} from "next"
import {LoginForm} from "../../components/forms/login/LoginForm"
import styles from "./index.module.scss"

const LoginPage: NextPage = () => {
    return (
            <div className="page">
                <LoginForm />
            </div>
    )
}

export default LoginPage