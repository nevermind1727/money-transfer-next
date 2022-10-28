import {RiAddCircleLine} from "react-icons/ri"
import styles from "./index.module.scss"

export const PaymentMethodHeader = () => {
    return (
        <div className={styles.paymentMethodContainer}>
            <RiAddCircleLine size={32} />
            <div className={styles.paymentMethodTitle}>Payment Methods</div>
        </div>
    )
}