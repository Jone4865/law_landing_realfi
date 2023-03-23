import styles from "./Content.module.scss";
import { useState, useEffect } from "react";

type Props = {
  title: string;
  subTitle: string;
  contentLine1: string;
  contentLine2: string;
  animation: string | boolean;
};

export default function Content({
  title,
  subTitle,
  contentLine1,
  contentLine2,
  animation,
}: Props) {
  return (
    <div
      className={`${styles.content_container} 
${animation ? styles.content_opacity : ""}
      `}
    >
      <div className={styles.content_wrap}>
        {contentLine2 === "" ? (
          <div className={styles.content_coming} style={{ letterSpacing: "0" }}>
            COMING SOON
          </div>
        ) : (
          ""
        )}
        <h2>{title}</h2>
        <div>{subTitle}</div>
        <span>{contentLine1}</span>
        <span>{contentLine2}</span>
        {title === "리얼파이는 세상의 모든 권리를" && (
          <span>자유롭게 거래할 수 있습니다.</span>
        )}
      </div>
    </div>
  );
}
