import React from 'react'
import { SidePoster } from '../SidePoster/SidePoster'
import { Category } from './Category'

export const SingleCategory = () => {
  return (
    <>
        <SidePoster poster={true}/>
        <Category />
    </>
  )
}
