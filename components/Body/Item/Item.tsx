import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Content from "./Content/Content";
import styles from "./Item.module.scss";

import "animate.css";

type Props = {
  location: number;
  setLocation: (location: number) => void;
  position: boolean;
};

export default function Item({ location, setLocation, position }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const [ani1, setAni1] = useState<boolean | string>(false);
  const [ani2, setAni2] = useState(false);
  const [ani3, setAni3] = useState(false);
  const [ani4, setAni4] = useState(false);
  const [pc, setPc] = useState(true);

  const isPc = useMediaQuery({
    query: "(min-width : 760px) and (max-width :1920px)",
  });

  const one = useRef<any>(null);
  const two = useRef<any>(null);
  const three = useRef<any>(null);
  const four = useRef<any>(null);
  const five = useRef<any>(null);
  const Item = ["차별성", "청약하기", "마켓거래", "배당수입"];
  const Refs = [one, two, three, four, five];
  const title = [
    "리얼파이는 세상의 모든 권리를",
    "5천원 부터 선착순 방식으로",
    "주식보다 쉬운",
    "모닝콜 보다 기분좋은",
  ];
  const subTitle = [
    "거래하는 장외거래 플랫폼입니다.",
    "누구나 쉽게 청약이 가능합니다.",
    "손쉽게 투자가 가능해요",
    "수익 알람으로 아침을 열어보세요.",
  ];
  const contentLine1 = [
    "부동산 STO는 시작일 뿐입니다.",
    "세상에 존재 하는 모든 권리를 나누는",
    "어려운 주식은 그만,",
    "보유한 토큰 만큼 높은 수익의 배당을",
  ];
  const contentLine2 = [
    "세상의 모든 권리와 권한을 토큰증권화 하여",
    "토큰증권(STO)을 리얼파이에서 구매하세요.",
    "주식보다 편리하게 수익증권을 사고 팔아 보세요.",
    "매일 확인 할수 있어요.",
  ];

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      false;
    }
  }, [isPc]);

  useEffect(() => {
    if (location) {
      Refs[location - 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      one.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
        if (isPc) {
          window.pageYOffset >= screen.height * 0.3 ? setAni1(true) : "";
          window.pageYOffset >= screen.height * 1.3 - 50 ? setAni2(true) : "";
          window.pageYOffset >= screen.height * 2.3 - 110 ? setAni3(true) : "";
          window.pageYOffset >= screen.height * 3.3 - 180 ? setAni4(true) : "";
        } else {
          window.pageYOffset >= screen.height * 0.3 ? setAni1(true) : "";
          window.pageYOffset >= screen.height * 0.6 ? setAni2(true) : "";
          window.pageYOffset >= screen.height * 1.1 ? setAni3(true) : "";
          window.pageYOffset >= screen.height * 1.6 ? setAni4(true) : "";
        }
      });
    })();
    setLocation(0);
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setLocation(0);
    }
  }, [scrollY]);

  return (
    <div className={styles.item_container}>
      <ul className={styles.item_wrap}>
        <li ref={one} id="홈" className={styles.item_body}>
          <div
            className={styles.item_top}
            style={{ backgroundImage: "url(/img/background/bg1.png)" }}
          >
            <div className={styles.item_top_wrap}>
              <Content
                title="세상의 모든 권리를 증권으로"
                subTitle="투자의 새로운 진화"
                contentLine1="리얼파이에서 토큰을 투자해 보세요."
                contentLine2=""
                animation={true}
              />
              <div
                className={`${styles.item_top_img} 
                    ${"animate__animated animate__fadeInRight"}
                }`}
              >
                <img src={`/img/body_img/body_img1.png`} alt="탑 바디 이미지" />
              </div>
            </div>
          </div>
        </li>
        {Item.map((item, index) => (
          <li
            key={index}
            id={item}
            ref={Refs[index]}
            className={styles.item_body}
          >
            <div
              style={{
                backgroundImage: pc
                  ? `url(/img/background/bg${+index + 2}.png)`
                  : `url(/img/background/bg${+index + 2}_m.png)`,
              }}
              className={styles.item_bottom}
            >
              <div
                className={
                  index % 2 === 0
                    ? styles.item_bottom_left
                    : styles.item_bottom_right
                }
              >
                <Content
                  title={title[index]}
                  subTitle={subTitle[index]}
                  contentLine1={contentLine1[index]}
                  contentLine2={contentLine2[index]}
                  animation={
                    index == 0
                      ? ani1
                      : index == 1
                      ? ani2
                      : index == 2
                      ? ani3
                      : index == 3
                      ? ani4
                      : ""
                  }
                />
                <div className={styles.item_bottom_img}>
                  <img
                    src={`/img/body_img/body_img${index + 2}.png`}
                    alt="바디 이미지"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
