import { useEffect, useState } from "react";
import Header from "../Header/Header";
import InvitationFooter from "../InvitationFooter/InvitationFooter";
import Side from "../Side/Side";
import styles from "./Invitation.module.scss";
import Head from "next/head";

export default function Invitation() {
  const [location, setLocation] = useState(0);
  const [position, setPosition] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLocation(location);
    setPosition(false);
  }, [position]);

  const setModalState = (modal: boolean) => {
    setModal(modal);
  };

  const setContentClick = (position: boolean) => {
    setPosition(position);
  };
  return (
    <>
      <Head>
        <meta name="Keywords" content="realfi" />
        <meta name="Keywords" content="realfiex" />
        <meta property="og:url" content="http://realfiex.com/invitation" />
        <meta property="og:title" content="Real_Fi" />
        <meta
          property="og:description"
          content="토큰증권 STO 국회세미나에 초대합니다.
          "
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta property="og:image" content="/img/meta.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
      </Head>
      <div className={styles.container}>
        <Header
          setLocation={setLocation}
          setModalState={setModalState}
          setContentClick={setContentClick}
          onRouter
        />
        <div className={styles.more_wrap}>
          <div className={styles.invitation_img} />
        </div>
        <Side
          modal={modal}
          setModalState={setModalState}
          onRouter
          setLocation={setLocation}
        />
        <InvitationFooter />
      </div>
    </>
  );
}
