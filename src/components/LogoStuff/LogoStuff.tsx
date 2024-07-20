import React from 'react'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'
import style from '../../styles/styleComp/logoStuff.module.scss'
import logoIcon from "../../images/logo.svg";

export const LogoStuff = () => {
  return (
    <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logoIcon} alt="logo" />
        </Link>
      </div>
  )
}
