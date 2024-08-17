import React, { useEffect, useState } from "react";
import styles from "../../styles/product/product.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/user/userSlice";

const SIZES = [4, 4.5, 5, 5.5, 6, 6.5, 7];

export const Product = (item) => {
  let { images, title, price, description } = item;
  let [currentImg, setCurrentImg] = useState("Loading");
  let [currentSize, setCurrentSize] = useState();
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  useEffect(() => {
    if (images.length == 0) return;
    setCurrentImg(images[0]);
  }, [images]);
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{
            backgroundImage: `url(${currentImg})`,
          }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, index) => (
            <div
              className={styles.image}
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => {
                setCurrentImg(image);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                className={
                  styles[`size-${currentSize == size ? "active" : ""}`]
                }
                onClick={() => {
                  setCurrentSize(size);
                }}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button onClick={()=>addToCart(item)} disabled={!currentSize} className={styles.add}>
            Add to Cart
          </button>
          <button className={styles.favourite}>Add to Favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME} className={styles.return}>
            RETURN TO HOME {`>`}
          </Link>
        </div>
      </div>
    </section>
  );
};
