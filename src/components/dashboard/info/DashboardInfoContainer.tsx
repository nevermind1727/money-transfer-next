import {BalanceInfoCard} from "../balance/BalanceInfoCard"
import { PendingInfoCard } from "../pending/PendingInfoCard"
import styles from "./index.module.scss"

export const DashboardInfoContainer = () => {
    return (
        <>
            <div className={styles.infoContainer}>
                <BalanceInfoCard />
                <PendingInfoCard />
                <BalanceInfoCard />
            </div>
        </>
    )
}