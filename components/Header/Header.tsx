import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import router from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

type Props = {
  setLocation: (location: number) => void;
  setModalState: (modal: boolean) => void;
  setContentClick: (position: boolean) => void;
  onRouter?: boolean;
};

export default function Header({
  setLocation,
  setModalState,
  setContentClick,
  onRouter = false,
}: Props) {
  const [scrollY, setScrollY] = useState(false);
  const [more, setMore] = useState(false);

  const Buttons = [
    "홈",
    "차별성",
    "청약하기",
    "마켓거래",
    "배당수입",
    "2023 국회세미나",
  ];

  const onClickHandle = (index: number) => {
    if (index !== 5) {
      setLocation(index);
      setContentClick(true);
    }
    setModalState(false);
    localStorage.setItem("location", index.toString());
    if (onRouter) {
      index !== 5 && router.replace(`/`);
    }
  };

  const onClickMore = (title: string) => {
    router.replace(`/${title}`);
  };

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
          <Link href={"/"}>
            <img src={"/img/logo/logo.png"} alt="헤더 로고" />
          </Link>
        </div>
        <div>
          <div className={styles.herder_buttons_wrap}>
            {Buttons.map((button, index) => (
              <ScrollLink key={button} to={button} spy={true} smooth={true}>
                <div
                  onClick={() => {
                    onClickHandle(index);
                  }}
                >
                  <p
                    className={styles.header_hover}
                    onMouseEnter={() => index === 5 && setMore(true)}
                  >
                    {button}
                  </p>
                  {more && index === 5 && (
                    <div
                      className={styles.header_more_container}
                      onMouseEnter={() => setMore(true)}
                      onMouseLeave={() => setMore(false)}
                    >
                      <div className={styles.header_more}>
                        <div
                          className={styles.header_hover}
                          onClick={() => onClickMore("seminar")}
                        >
                          세미나
                        </div>
                        <hr />
                        <div
                          className={styles.header_hover}
                          onClick={() => onClickMore("invitation")}
                        >
                          초대장
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollLink>
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
