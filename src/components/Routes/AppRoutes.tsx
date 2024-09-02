import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { ROUTES } from '../../utils/routes'
import {SingleProduct} from '../Products/SingleProduct'
import {SingleCategory} from '../Categories/SingleCategory'
import {Profile} from '../Profile/Profile'
import {Test} from "./Test"
export const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
        <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
    </Routes>
  )
}
