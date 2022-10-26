import { NavigationItem } from "./types";
import {BiHome} from "react-icons/bi"
import {AiOutlineTransaction} from "react-icons/ai"
import {BsFillCreditCard2BackFill} from "react-icons/bs"
import {MdOutlineSettingsSuggest} from "react-icons/md"

export const getNavigationIcon = (item: NavigationItem) => {
    switch(item.type) {
        case "dashboard":
            return BiHome;
        case "transactions":
            return AiOutlineTransaction;
        case "methods": 
            return BsFillCreditCard2BackFill;
        case "settings":
            return MdOutlineSettingsSuggest;
    }
}