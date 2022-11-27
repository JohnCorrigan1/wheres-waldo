import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { TimerProvider } from "../lib/timerContext";
import { LevelProvider } from "../lib/levelContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TimerProvider>
        <LevelProvider>
          <Component {...pageProps} />
          <Toaster />
        </LevelProvider>
      </TimerProvider>
    </>
  );
}

export default MyApp;
