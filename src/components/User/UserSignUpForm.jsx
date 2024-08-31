import React, { useState } from "react";
import styles from "../../styles/user/user.module.scss";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

export const UserSignUpForm = ({ closeForm, currentForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(createUser(values));
    closeForm();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.title}>SIGN UP</div>
        <div className={styles.close} onClick={closeForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fff"
            fill="none"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSumbit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Your name"
            autoComplete="off"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            autoComplete="off"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />

          <input
            type="avatar"
            placeholder="Your avatar"
            autoComplete="off"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.link} onClick={() => currentForm("login")}>
          I already have an account
        </div>
        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};
