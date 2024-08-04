import React from "react";
import styles from "../../styles/poster/poster.module.scss";
import BG from "./../../images/computer.png";

export const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>The bestseller of 2024</div>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 4090 TI</h1>
          <button className={styles.button}>Buy Now</button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  );
};
