import { ReactElement } from "react"
import DashboardLayout from "../../components/layouts/DashboardLayout"
import { NextPageWithLayout } from "../../utils/types"

const DashboardPage: NextPageWithLayout = () => {
  return <div className="page">dashboard</div>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return (
      <DashboardLayout>
        {page}
      </DashboardLayout>
    )
}

export default DashboardPage