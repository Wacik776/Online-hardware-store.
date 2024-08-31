import React, { useEffect, useState } from "react";
import { SidePoster } from "../SidePoster/SidePoster";
import styles from "../../styles/profile/profile.module.scss";
import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../../features/user/userSlice";
export const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state)=>{
    return state.user.currentUser
  })
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "",
  });
  useEffect(()=>{
    if (!currentUser) return;
    setValues(currentUser)
  },[currentUser])
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(`updateHandleSubmitClick`,e)
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };
  return (
    <div className={styles.wrap}>
      <SidePoster poster={""} />
      {!currentUser ? (
        <span style={{marginTop: '20%', marginLeft: '20%', fontSize: 50}}>You need to log in</span>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <button type="submit" className={styles.submit}>Update</button>
          </div>
        </form>
      )}
    </div>
  );
};
