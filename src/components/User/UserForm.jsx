import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserSignUpForm } from './UserSignUpForm'
import { toggleForm } from '../../features/user/userSlice';
import styles from "../../styles/user/user.module.scss"
export const UserForm = () => {
    const {showForm} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const closeForm = () =>{
        dispatch(toggleForm(false))
    }

  return (
    showForm && <>
    <div className={styles.overlay} onClick={closeForm}></div>
    <UserSignUpForm closeForm={closeForm}/>
    </>
    
  )
}
