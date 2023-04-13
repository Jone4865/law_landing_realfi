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
