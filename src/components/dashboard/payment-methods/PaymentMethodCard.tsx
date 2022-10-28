import { FC } from "react";
import { PaymentMethod } from "../../../utils/types";
import styles from "./index.module.scss"

type Props = {
    paymentMethod: PaymentMethod;
}

export const PaymentMethodCard: FC<Props> = ({paymentMethod}) => {
    const {type, last4Digits, name} = paymentMethod
    return (
        <div className={styles.paymentCard}>
            <div className={styles.content}>
                <div className={styles.cardTitle}>Gas Cashback</div>
                <div className={styles.last4Digits}>**** **** **** 1337</div>
            </div>
            <div className={styles.footer}>
                <div>Exp 09/24</div>
                <div>VISA</div>
            </div>
        </div>
    )
}