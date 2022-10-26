import { NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
    {
        type: "dashboard",
        pathname: "/dashboard"
    },
    {
        type: "transactions",
        pathname: "/transactions"
    },
    {
        type: "methods",
        pathname: "/payment-methods"
    },
    {
        type: "settings",
        pathname: "/settings"
    },
]