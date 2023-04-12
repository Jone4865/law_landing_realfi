import { Inter } from "@next/font/google";
import Landing from "../components/Landing/Landing";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const AppKey = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`;

  return (
    <>
      <Head>
        <meta
          name="naver-site-verification"
          content="96d552c2c53e7ce4e50bc5608202ada8d9516be0"
        />
        <title>
          리얼파이 | 디지털에서 탄생한 투자의 혁신 토큰증권 STO거래소
        </title>
        <meta name="Keywords" content="리얼파이" />
        <meta name="Keywords" content="realfi" />
        <meta name="Keywords" content="realfiEx" />
        <meta name="Keywords" content="토큰증권" />
        <meta name="Keywords" content="블록체인 STO" />
        <meta name="Keywords" content="블록체인" />

        <meta name="Keywords" content="리얼디비젼" />
        <meta name="Keywords" content="로디언즈홀딩스" />
        <meta name="Keywords" content="정보보호관리체계" />
        <meta name="Keywords" content="기술혁신형중소기업" />
        <meta name="Keywords" content="찐부" />
        <meta name="Keywords" content="증권형토큰" />

        <meta property="og:url" content={process.env.NEXT_PUBLIC_SURVICE_URL} />
        <meta property="og:title" content="Real_Fi" />
        <meta
          property="og:description"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta
          property="description"
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
        <script type="text/javascript" src={AppKey} async></script>
        <script type="text/javascript" async></script>
      </Head>
      <Landing />
    </>
  );
}
