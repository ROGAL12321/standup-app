import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'
import { Inter } from "@next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({
                              Component,
                              pageProps: {session, ...pageProps},
                            }: AppProps<{ session: Session; }>) {
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
