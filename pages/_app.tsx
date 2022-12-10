import "../styles/globals.css";

import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <> 
    <SessionProvider session={pageProps.session}>
      <ParallaxProvider >
        <Component {...pageProps} />
      </ParallaxProvider>
      </SessionProvider>
    </>
  );
}


