import styles from "./InvitationFooter.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import Head from "next/head";

export default function InvitationFooter() {
  const Btns = ["write", "share", "poster"];
  const Ments = ["참가신청", "공유하기", "포스터보기"];
  const notify = () => toast("주소가 복사되었습니다.");

  const onClickHandle = (btn: string) => {
    if (btn === "write") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSelAYLfKjeWQNnhQosgV7jUnGaBkOumXhgznn056d89m_mr-g/viewform",
        "_blank"
      );
    } else if (btn === "share") {
      const textToCopy = "https://www.realfiex.com/invitation";
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      notify();
    } else {
      router.push("/seminar");
    }
  };
  return (
    <>
      <Head>
        <meta name="Keywords" content="realfi" />
        <meta name="Keywords" content="realfiex" />
        <meta property="og:url" content="http://realfiex.com/" />
        <meta property="og:title" content="Real_Fi" />
        <meta
          property="og:description"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="소액으로 시작하는 부동산 조각 투자"
        />
        <meta property="og:image" content="/img/meta.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
      </Head>
      <div className={styles.pc_side}>
        <div className={styles.title}>QUICK MENU</div>
        {Btns.map((btn, index) => (
          <div
            key={btn}
            className={styles.line}
            onClick={() => onClickHandle(btn)}
          >
            <div
              className={styles.btns}
              style={{
                backgroundImage: `url(/img/more/${btn}.png)`,
              }}
            />
            <div className={styles.ments}>{Ments[index]}</div>
            <div className={styles.next_icon} />
          </div>
        ))}
      </div>
      <div className={styles.mobile_footer}>
        {Btns.map((btn, index) => (
          <div
            key={btn}
            className={styles.footer_btn}
            onClick={() => onClickHandle(btn)}
          >
            <div
              className={styles.footer}
              style={{
                backgroundImage: `url('/img/more/${btn}_m.png')`,
              }}
            />
            <div>{Ments[index]}</div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </>
  );
}
