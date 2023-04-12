import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Side from "../Side/Side";

import styles from "./Landing.module.scss";

export default function Landing() {
  const [location, setLocation] = useState<number>(0);
  const [position, setPosition] = useState(false);
  const [modal, setModal] = useState(false);
  const [saveLocation, setSaveLocation] = useState<string | null>(null);

  useEffect(() => {
    setPosition(false);
    setSaveLocation(localStorage.getItem("location"));
    if (saveLocation !== null) {
      setLocation(+saveLocation);
      localStorage.removeItem("location");
    }
  }, [position, saveLocation]);

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
        <Side modal={modal} setModalState={setModalState} />
        <Body location={location} setLocation={setLocation} />
      </div>
    </div>
  );
}
