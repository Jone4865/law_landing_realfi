import { Inter } from "@next/font/google";
import Head from "next/head";
import Landing from "../components/Landing/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="Keywords" content="realfi" />
        <meta name="Keywords" content="realfiex" />
        <meta property="og:url" content="http://realfiex.com/" />
        <meta property="og:title" content="Real_Fi" />
        <meta
          property="og:description"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta property="og:image" content="/img/logo/og_img.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
      </Head>
      <Landing />
    </>
  );
}
