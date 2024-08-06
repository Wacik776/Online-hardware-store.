import React from "react";

import styles from "../../styles/banner/banner.module.scss";
import bannerImg from "../../images/banner.png";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={styles.more}>See More</button>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={styles.discount}>
            save up to <span>50%</span> off
        </p> 
      </div>
    </section>
  );
};
