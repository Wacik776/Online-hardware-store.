import { Link } from "react-router-dom";
import style from "../../styles/header/header.module.scss";
import { ROUTES } from "../../utils/routes";
import avatarIcon from "../../images/avatar.jpg";
import { LogoStuff } from "../LogoStuff/LogoStuff";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleForm } from "../../features/user/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.user.favourites);
  const cart = useSelector((state) => state.user.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true))
  };
  return (
    <div className={style.header}>
      <LogoStuff />
      <div className={style.info}>
        <div className={style.user} onClick={handleClick}>
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
          <Link to={ROUTES.FAVOURITES} className={style.favourites}>
            <svg className={style["icon-fav"]}>
              <use xlinkHref="/sprite.svg#heart" />
            </svg>
            {fav.length > 0 && (
              <span className={style["fav-count"]}>{fav.length}</span>
            )}
          </Link>
          <Link to={ROUTES.CART} className={style.cart}>
            <svg className={style["icon-cart"]}>
              <use xlinkHref="/sprite.svg#bag" />
            </svg>
            {cart.length > 0 && (
              <span className={style.count}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
