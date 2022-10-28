import Link from "next/link"
import { navigationItems } from "../../utils/constants"
import styles from "./index.module.scss"
import { NavigationSidebarItem } from "./navigation/items/NavigationSidebarItem"

export const NavigationSidebar = () => {
    return <nav className={styles.nav}>
        <div className={styles.navigationItemsContainer}>
            {navigationItems.map(item => 
                <div className={styles.navItem} key={item.type}>
                    <NavigationSidebarItem item={item} />
                </div>
            )}
        </div>
    </nav>
}