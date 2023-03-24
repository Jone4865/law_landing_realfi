import styles from "./Footer.module.scss";
import router from "next/router";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const sociallPath = [
    "https://center-pf.kakao.com/_VDxfDxj",
    "https://www.instagram.com/realfiexchange/",
    "https://www.facebook.com/profile.php?id=100090898749130",
    "https://band.us/page/90537555",
    "https://www.youtube.com/@realfiex",
    "https://blog.naver.com/realfi",
  ];
  const [scroll, setScroll] = useState(false);

  const isPc = useMediaQuery({
    query: "(min-width : 760px) and (max-width :1920px)",
  });

  const clickTell = () => {
    window.location.href = "tel:1833-8604";
  };

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        if (isPc) {
          window.pageYOffset >= screen.height * 3.65 ? setScroll(true) : "";
        } else {
          window.pageYOffset >= screen.height * 4 ? setScroll(true) : "";
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
          <img
            src={"/img/logo/logo.png"}
            onClick={() => router.push("/")}
            alt="푸터 로고"
          />
        </div>
        <div className={styles.footer_bottom_line2}>
          <span>(주)리얼디비젼 | 대표이사 김창섭 | (06586)</span>
          <span> 서울특별시 서초구 서초대로25길 55, 2층 202호(방배동)</span>
        </div>
        <div className={styles.footer_bottom_line2}>
          <span>
            사업자등록번호 510-87-02262 | 통신판매업 2023-서울서초-0774
          </span>
        </div>
        <div className={styles.footer_bottom_line2}>
          <span>ⓒREALDIVISION 2023 All rights reserved.</span>
        </div>
      </div>
      <div className={styles.footer_line3}>
        <div className={styles.footer_line3_left_wrap}>
          <div className={styles.footer_line3_left}>
            <div className={styles.footer_line3_title}>약관</div>
            <div
              className={styles.hover}
              onClick={() => router.push("/policy?=1")}
            >
              서비스 이용약관
            </div>
            <div
              className={styles.hover}
              onClick={() => router.push("/policy?=2")}
            >
              개인정보처리방침
            </div>
            <div
              className={styles.hover}
              onClick={() => router.push("/policy?=3")}
            >
              마케팅정보 수신 동의
            </div>
          </div>
          <div className={styles.footer_line3_left}>
            <div className={styles.footer_line3_title}>고객센터</div>
            <div onClick={clickTell}>고객상담 : 1833-8604</div>
            <div>점심시간 : 13:00 ~ 14:00</div>
            <div>Email: realfiexchnge@gmail.com</div>
          </div>
        </div>
        <div>
          <div className={styles.footer_line3_sns_title}>SNS</div>
          <div className={styles.flex}>
            {sociallPath.map((path, idx) => (
              <Link
                key={idx}
                href={path}
                target="_blank"
                style={{ marginRight: "10px" }}
              >
                <Image
                  src={`/img/socialIcon/${idx + 1}.png`}
                  alt="dsd"
                  width={isPc ? 50 : 39}
                  height={isPc ? 50 : 39}
                  quality={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
