import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Content from "./Content/Content";
import styles from "./Item.module.scss";

import "animate.css";
import Image from "next/image";

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
  const Item = [two, three, four, five];

  const title = [
    "전문가가 엄선한",
    "건물주가 되는",
    "주식처럼",
    "정기 배당 수익을 통해",
  ];
  const subTitle = [
    "차별화 된 부동산 IP",
    "가장 빠른 방법",
    "손쉽게 거래가 가능해요",
    "13번째 월급을 만들어봐요",
  ];
  const contentLine1 = [
    "전문가 그룹이 깐깐하게 선정한",
    "5천원 부터 선착순 방식으로",
    "주식만큼 편리하게",
    "보유한 지분만큼 높은 수준의",
  ];
  const contentLine2 = [
    "진짜 상품성 있는 부동산 IP만 취급해요.",
    "누구나 쉽게 청약이 가능해요.",
    "수익증권을 사고 팔아 보세요.",
    "배당 수익을 기대할 수 있어요.",
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
      Item[location - 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      one.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [position]);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
        if (isPc) {
          window.pageYOffset >= screen.height*0.3 ? setAni1(true) : "";
          window.pageYOffset >= screen.height*1.3-50 ? setAni2(true) : "";
          window.pageYOffset >= screen.height*2.3-110 ? setAni3(true) : "";
          window.pageYOffset >= screen.height*3.3-180 ? setAni4(true) : "";
        } else {
          window.pageYOffset >= screen.height*0.3 ? setAni1(true) : "";
          window.pageYOffset >= screen.height*1.3-50 ? setAni2(true) : "";
          window.pageYOffset >= screen.height*2.3-110 ? setAni3(true) : "";
          window.pageYOffset >= screen.height*3.3-180 ? setAni4(true) : "";
        }
      });
    })();
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setLocation(0);
    }
  }, [scrollY]);

  return (
    <div className={styles.item_container}>
      <ul className={styles.item_wrap}>
        <li ref={one} className={styles.item_body}>
          <div
            className={styles.item_top}
            style={{ backgroundImage: "url(/img/background/bg1.png)" }}
          >
            <div className={styles.item_top_wrap}>
              <Content
                title="소액으로 시작하는"
                subTitle="부동산 조각 투자"
                contentLine1="투자를 시작하고 건물주가 되어보세요"
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
          <li ref={Item[index]} key={index} className={styles.item_body}>
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
                  <img src={`/img/body_img/body_img${index + 2}.png`} alt="바디 이미지" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
