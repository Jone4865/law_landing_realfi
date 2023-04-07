import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

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
  const router = useRouter();
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
            {router?.pathname === "/" ? (
              Buttons.map((button, index) => (
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
                          <Link
                            href={"/seminar"}
                            className={styles.header_more_hover}
                          >
                            <div>세미나</div>
                          </Link>
                          <hr />
                          <Link
                            href={"/invitation"}
                            className={styles.header_more_hover}
                          >
                            <div>초대장</div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollLink>
              ))
            ) : (
              <>
                <p
                  className={styles.header_hover}
                  onMouseEnter={() => setMore(true)}
                >
                  2023 국회세미나
                </p>
                {more && (
                  <div
                    className={styles.header_more_container}
                    onMouseEnter={() => setMore(true)}
                    onMouseLeave={() => setMore(false)}
                  >
                    <div className={styles.header_more}>
                      <Link
                        href={"/seminar"}
                        className={styles.header_more_hover}
                      >
                        <div>세미나</div>
                      </Link>
                      <hr />
                      <Link
                        href={"/invitation"}
                        className={styles.header_more_hover}
                      >
                        <div>초대장</div>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}
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
