import { useEffect, useState } from "react";
import styles from "./Side.module.scss";

type Props = {
  modal: boolean;
  setModalState: (modal: boolean) => void;
  setLocation: (location: number) => void;
  setContentClick: (position: boolean) => void;
};

function Side({ modal, setModalState, setLocation, setContentClick }: Props) {
  const [none, setNone] = useState(true);
  const Buttons = ["홈", "차별성", "청약하기", "마켓거래", "배당수입"];

  if (!modal) {
    setTimeout(() => {
      setNone(true);
    }, 100);
  } else {
    setTimeout(() => {
      setNone(false);
    }, 0);
  }

  useEffect(() => {
    const htmlEle = document?.getElementsByTagName("html").item(0);
    if (modal) {
      if (htmlEle) {
        htmlEle.style.overflow = "hidden";
      }
    } else {
      if (htmlEle) {
        htmlEle.style.overflow = "unset";
      }
    }
  }, [modal]);

  return (
    <div
      className={`${none ? styles.side_none : ""} ${styles.side_contain}`}
      onClick={() => {
        setModalState(false);
      }}
    >
      <div
        className={`${modal ? styles.side_slidein : styles.side_slideout} ${
          styles.side_wrap
        }`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>
          <img alt="공백" />
          <span onClick={() => setModalState(false)}>X</span>
        </h1>
        {Buttons.map((button, index) => (
          <div
            key={button}
            onClick={() => {
              setLocation(index);
              setModalState(false);
              setContentClick(true);
            }}
            className={styles.side_hover}
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side;
