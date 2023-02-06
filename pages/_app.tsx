import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${lato.className} font-sans selection:text-blue-600`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
