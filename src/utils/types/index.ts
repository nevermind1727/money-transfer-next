import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type NavigationMethodType = "dashboard" | "transactions" | "methods" | "settings"

export type NavigationItem = {
  type: NavigationMethodType;
  pathname: string;
}

export type PaymentMethod = {
  type: string;
  last4Digits: string;
  name: string;
}