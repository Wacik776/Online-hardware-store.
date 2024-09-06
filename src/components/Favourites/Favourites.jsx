import React from 'react'
import { SidePoster } from '../SidePoster/SidePoster'
import { Products } from '../Products/Products'
import { useSelector } from 'react-redux'

export const Favourites = () => {
    const {favourites} = useSelector((state)=>state.user);
  return (
    <div>
        <div style={{display: 'flex'}}>
        <SidePoster poster={false} />
        {favourites.length>0 ? (<Products style={{marginLeft: '10px'}} products={favourites} amount={100} title={"Favourites Products"}/>):(<div>Empty</div>)}
        </div>
    </div>
  )
}
