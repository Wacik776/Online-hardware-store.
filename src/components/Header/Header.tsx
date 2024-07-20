import { Link } from "react-router-dom";
import style from "../../styles/header/header.module.scss";
import { ROUTES } from "../../utils/routes";
import avatarIcon from "../../images/avatar.jpg";
import { LogoStuff } from "../LogoStuff/LogoStuff";

export const Header = () => {
  return (
    <div className={style.header}>
      <LogoStuff />
      <div className={style.info}>
        <div className={style.user}>
          <div
            className={style.avatar}
            style={{ backgroundImage: `url(${avatarIcon})` }}
          ></div>
          <div className={style.username}>GUEST</div>
        </div>
        <form className={style.form}>
          <div className={style.icon}>
            <svg className="icon">
              <use xlinkHref="/sprite.svg#search" />
            </svg>
          </div>
          <div className={style.input}>
            <input
              type="search"
              name="search"
              placeholder="Type anything..."
              autoComplete="off"
              onChange={() => {}}
              value={""}
            />
          </div>
          {false && <div className={style.box}></div>}
        </form>
        <div className={style.account}>
          <Link to={ROUTES.HOME} className={style.favourites}>
            <svg className={style['icon-fav']}>
              <use xlinkHref="/sprite.svg#heart" />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={style.cart}>
            <svg className={style['icon-cart']}>
              <use xlinkHref="/sprite.svg#bag" />
            </svg>
            <span className={style.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
