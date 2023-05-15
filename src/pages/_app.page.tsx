import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'

import '../lib/dayjs'

import { Roboto } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={roboto.className}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </QueryClientProvider>
  )
}
