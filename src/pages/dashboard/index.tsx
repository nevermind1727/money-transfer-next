import { ReactElement } from "react"
import { DashboardInfoContainer } from "../../components/dashboard/info/DashboardInfoContainer"
import { PaymentMethodContainer } from "../../components/dashboard/payment-methods/PaymentMethodContainer"
import DashboardLayout from "../../components/layouts/DashboardLayout"
import { NextPageWithLayout } from "../../utils/types"
import styles from "./index.module.scss"

const DashboardPage: NextPageWithLayout = () => {
  return (
      <>
          <header className={styles.header}>
              <h1>Welcome to the dashboard!</h1>
          </header>
          <div className={styles.main}>
            <DashboardInfoContainer />
            <PaymentMethodContainer />
          </div>
      </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return (
      <DashboardLayout>
        {page}
      </DashboardLayout>
    )
}

export default DashboardPage