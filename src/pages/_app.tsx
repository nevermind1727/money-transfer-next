import '../styles/globals.css'
import "@fontsource/inter"
import { AppPropsWithLayout } from '../utils/types'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
