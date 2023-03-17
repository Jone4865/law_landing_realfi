import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import router from "next/router";

type Props = {
  setLocation: (location: number) => void;
  setModalState: (modal: boolean) => void;
  setContentClick: (position: boolean) => void;
};

export default function Header({
  setLocation,
  setModalState,
  setContentClick,
}: Props) {
  const [scrollY, setScrollY] = useState(false);

  const Buttons = ["홈", "차별성", "청약하기", "마켓거래", "배당수입"];

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.pageYOffset <= 50 ? false : true);
      });
    })();
  }, []);

  return (
    <div className={!scrollY ? styles.header_trans : styles.header_black}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <img
            src={"/img/logo/logo.png"}
            onClick={() => router.push("/")}
            alt="헤더 로고"
          />
        </div>
        <div>
          <div className={styles.herder_buttons_wrap}>
            {Buttons.map((button, index) => (
              <div
                key={button}
                className={styles.header_hover}
                onClick={() => {
                  setLocation(index);
                  setModalState(false);
                  setContentClick(true);
                }}
              >
                <span>{button}</span>
              </div>
            ))}
          </div>
          <img
            className={styles.header_icon}
            src={"/img/icon/menu_white.svg"}
            onClick={() => setModalState(true)}
          />
        </div>
      </div>
    </div>
  );
}
