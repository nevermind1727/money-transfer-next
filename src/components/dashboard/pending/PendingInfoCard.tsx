import styles from "./index.module.scss"

export const PendingInfoCard = () => {
    return (
        <div className={styles.card}>
            <h2>Pending</h2>
            <div className={styles.pendingText}>
                <span>$152.228.133</span>
            </div>
        </div>
    )
    
}