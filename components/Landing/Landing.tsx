import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Side from "../Side/Side";

import styles from "./Landing.module.scss";

export default function Landing() {
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
    <div>
      <div className={styles.landing}>
        <Header
          setLocation={setLocation}
          setModalState={setModalState}
          setContentClick={setContentClick}
        />
        <Body
          location={location}
          setLocation={setLocation}
          position={position}
        />
        <Side
          modal={modal}
          setModalState={setModalState}
          setLocation={setLocation}
          setContentClick={setContentClick}
        />
      </div>
    </div>
  );
}
