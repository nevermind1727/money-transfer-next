import styles from "./index.module.scss"

export const BalanceInfoCard = () => {
    return (
        <div className={styles.card}>
            <h2>My Balance</h2>
            <div className={styles.balanceText}>
                <span>$322,228,137.17</span>
            </div>
            <div>
                <span>View Transactions</span>
            </div>
        </div>
    )
}