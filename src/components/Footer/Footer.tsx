import React from "react";
import style from "../../styles/footer/footer.module.scss";
import { LogoStuff } from "../LogoStuff/LogoStuff";

export const Footer = () => {
  return (
    <section className={style.footer}>
      <LogoStuff />
      <div className={style.rights}>
        Developed by {' '}
        <a href="https://github.com/Wacik776" target="_blank" rel="noreferrer">
           Robert
        </a>
      </div>
      <div className={style.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/sprite.svg#instagram" />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/sprite.svg#facebook" />
          </svg>
        </a>
        
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </section>
  );
};
