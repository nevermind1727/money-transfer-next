import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { getNavigationIcon } from "../../../../utils/helpers";
import { NavigationItem } from "../../../../utils/types";
import styles from "./index.module.scss"

type Props = {
    item: NavigationItem;
}

export const NavigationSidebarItem: FC<Props> = ({item}) => {
    const router = useRouter()
    const Icon = getNavigationIcon(item)
    return <div>
        <Link href={item.pathname}>
            <a>
                <Icon size={32} className={`${styles.icon} ${router.pathname === item.pathname && styles.active}`} />
            </a>
        </Link>
        
    </div>
}