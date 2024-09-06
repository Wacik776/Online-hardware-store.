import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidePoster } from "../SidePoster/SidePoster";
import styles from "../../styles/cart/cart.module.scss";
import { sumBy } from "../../utils/common";
import { addItemToCart, removeItemFromCart } from "../../features/user/userSlice";

export const Cart = () => {
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(removeItemFromCart(item.id))
  }
  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };
  return (
    <div className={styles.wrapper}>
      <SidePoster poster={false} />

      <div className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>
        {cart.length > 0 ? (
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;
              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>
                  <div className={styles.price}>{price}$</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use xlinkHref="/sprite.svg#minus" />
                      </svg>
                    </div>
                    <span className={styles.quant}>{quantity}</span>
                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use xlinkHref="/sprite.svg#plus" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.total}>{price * quantity}$</div>
                  <div className={styles.delete} onClick={()=>removeItem(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                    >
                      <path
                        d="M14.9994 15L9 9M9.00064 15L15 9"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textTransform: "uppercase",
              fontSize: 40,
              marginTop: "20%",
              marginLeft: "33%",
              width: 600,
            }}
          >
            CART is empty
          </div>
        )}
        <div className={styles.footCart}>
          <div className={styles.actions}>
            <div className={styles.actions}></div>
            TOTAL PRICE:{" "}
            <span>
              {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
            </span>
          </div>
          <button className={styles.proceed}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
