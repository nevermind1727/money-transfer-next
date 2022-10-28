import styles from "./index.module.scss"
import { PaymentMethod } from "../../../utils/types"
import { PaymentMethodCard } from "./PaymentMethodCard"
import { PaymentMethodHeader } from "./PaymentMethodHeader"

const mockPaymentMethods: PaymentMethod[] = [
    {
        type: "visa",
        last4Digits: "8671",
        name: "Gas Cash Back",
    },
    {
        type: "mastercard",
        last4Digits: "1337",
        name: "Best Bank Card"
    },
    {
        type: "American Express",
        last4Digits: "1488",
        name: "American Bank System",
    }
]

export const PaymentMethodContainer = () => {
    return (
        <>
        <PaymentMethodHeader />
        <div className={styles.container}>
            {mockPaymentMethods.map(method => (
                <PaymentMethodCard paymentMethod={method} key={method.last4Digits} />
            ))}
        </div>
        </>
    )
}