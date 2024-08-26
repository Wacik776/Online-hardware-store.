import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSignUpForm } from "./UserSignUpForm";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import styles from "../../styles/user/user.module.scss";
import { UserLoginForm } from "./UserLoginForm";
export const UserForm = () => {
  const { showForm, formType } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const currentForm = (formType) =>{
    dispatch(toggleFormType(formType))
  }
  const closeForm = () => {
    dispatch(toggleForm(false));
  };

  return (
    showForm && (
      <>
        <div className={styles.overlay} onClick={closeForm}></div>
        {formType === "signup" ? (
          <UserSignUpForm closeForm={closeForm} currentForm={currentForm}/>
        ) : (
          <UserLoginForm closeForm={closeForm} currentForm={currentForm}/>
        )}
      </>
    )
  );
};
