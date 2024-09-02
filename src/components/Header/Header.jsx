import { Link, useNavigate } from "react-router-dom";
import style from "../../styles/header/header.module.scss";
import { ROUTES } from "../../utils/routes";
import avatarIcon from "../../images/avatar.jpg";
import { LogoStuff } from "../LogoStuff/LogoStuff";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fav = useSelector((state) => state.user.favourites);
  const cart = useSelector((state) => state.user.cart);
  const [searchValue, setSearchValue] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleSearchClick = ({ target: { value } }) => {
    setSearchValue(value);
  };
  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  const [values, setValues] = useState({ name: "GUEST", avatar: avatarIcon });
  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  return (
    <div className={style.header}>
      <LogoStuff />
      <div className={style.info}>
        <div className={style.user} onClick={handleClick}>
          <div
            className={style.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          ></div>
          <div className={style.username}>{values.name}</div>
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
              onChange={handleSearchClick}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className={style.box}>
              {isLoading
                ? "Loading..."
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={()=>setSearchValue("")}
                        className={style.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={style.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={style.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
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
