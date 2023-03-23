import { useEffect, useState } from "react";
import styles from "./Side.module.scss";
import router from "next/router";

type Props = {
  modal: boolean;
  setModalState: (modal: boolean) => void;
  setLocation: (location: number) => void;
  setContentClick: (position: boolean) => void;
  onRouter?: boolean;
};

function Side({
  modal,
  setModalState,
  setLocation,
  setContentClick,
  onRouter = false,
}: Props) {
  const [none, setNone] = useState(true);
  const [more, setMore] = useState(false);
  const Buttons = [
    "홈",
    "차별성",
    "청약하기",
    "마켓거래",
    "배당수입",
    "2023 국회세미나",
  ];

  if (!modal) {
    setTimeout(() => {
      setNone(true);
    }, 100);
  } else {
    setTimeout(() => {
      setNone(false);
    }, 0);
  }

  const onClickHandle = (index: number) => {
    localStorage.setItem("location", index.toString());
    if (onRouter) {
      setLocation(index);
      setModalState(false);
      setContentClick(true);
      index !== 5 && router.push(`/`);
    } else {
      setLocation(index);
      setContentClick(true);
      setMore(true);
    }
  };
  const onClickMore = (title: string) => {
    router.push(`/${title}`);
  };

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
          <span />
          <span onClick={() => setModalState(false)}>X</span>
        </h1>
        {Buttons.map((button, index) => (
          <div
            key={button}
            onClick={() => onClickHandle(index)}
            className={styles.side_hover}
          >
            {button}
          </div>
        ))}
        {more && (
          <>
            <div
              className={`${styles.side_hover} ${styles.more}`}
              onClick={() => onClickMore("seminar")}
            >
              세미나
            </div>
            <div
              className={`${styles.side_hover} ${styles.more}`}
              onClick={() => onClickMore("invitation")}
            >
              초대장
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Side;
