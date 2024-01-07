import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import TvStage from "@/app/ui/tv/TvStage";
import {Nav} from "@/app/ui/nav/Nav";
import '@/pages/globals.css'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <TvStage
      // nav={<Nav />}
    >
      {getLayout(<Component {...pageProps} />)}
    </TvStage>
  )
}
