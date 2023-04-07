import { useEffect, useState } from "react";
import styles from "./Side.module.scss";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

type Props = {
  modal: boolean;
  setModalState: (modal: boolean) => void;
};

function Side({ modal, setModalState }: Props) {
  const router = useRouter();
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
        {router?.pathname !== "/" ? (
          <div onClick={() => setMore(!more)} className={styles.side_hover}>
            2023 국회세미나
          </div>
        ) : (
          Buttons.map((button, index) => (
            <ScrollLink key={button} to={button} spy={true} smooth={true}>
              <div
                className={styles.side_hover}
                onClick={() => index === 5 && setMore(!more)}
              >
                {button}
              </div>
            </ScrollLink>
          ))
        )}
        {more && (
          <>
            <Link href={"/seminar"}>
              <div className={`${styles.side_hover} ${styles.more}`}>
                세미나
              </div>
            </Link>
            <Link href={"/invitation"}>
              <div className={`${styles.side_hover} ${styles.more}`}>
                초대장
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Side;
