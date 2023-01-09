import styles from "./Footer.module.scss";
import router from "next/router";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const [scroll, setScroll] = useState(false);

  const isPc = useMediaQuery({
    query: "(min-width : 760px) and (max-width :1920px)",
  });

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        if (isPc) {
          window.pageYOffset >= screen.height*3.65 ? setScroll(true) : "";
        } else {
          window.pageYOffset >= screen.height*4 ? setScroll(true) : "";
        }
      });
    })();
  }, []);

  return (
    <div className={styles.footer_container}>
      <div
        className={styles.footer_top}
        style={{
          backgroundImage: isPc
            ? "url(/img/background/bg6.png"
            : "url(/img/background/bg6_m.png",
        }}
      >
        <div>세상 모두가 건물주가 되는 날 까지</div>
        <span className={scroll ? "animate__animated animate__bounceIn" : ""}>
          COMING SOON
        </span>
      </div>
      <div className={styles.footer_bottom}>
        <div>
          <img src={"/img/logo/logo.png"} onClick={() => router.push("/")} alt="푸터 로고" />
        </div>
        <div className={styles.footer_bottom_line2}>
          <span className={styles.footer_bold}>
            <span className={styles.footer_link}>(주)리얼디비전 </span>|
            대표이사 김창섭 |
          </span>
          <span> 서울특별시 서초구 서초대로25길 55, 2층 202호(방배동) |</span>
          <span> 사업자등록번호 510-87-02262</span>
        </div>
      </div>
    </div>
  );
}
