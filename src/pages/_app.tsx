import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/ko_KR'
import 'tailwindcss/tailwind.css'

import '../../styles/normalize.css'
import '../../styles/common.css'
import '../../styles/layout.css'
import { store } from '@modules/store/store'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 6 * 10 * 1000,
    },
  },
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.layout ?? ((page) => page)
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ECB04D',
            },
          }}
          locale={locale}
        >
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              {getLayout(<Component {...pageProps} />)}
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </Provider>
    </>
  )
}

export default App
