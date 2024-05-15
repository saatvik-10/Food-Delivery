import React from 'react'
import MenuCardsVegStarter  from '../components/Menu/menu'
import { Separator } from '../components/ui/separator'


function Menu() {
  return (
    <div className='content container items-center justify-center p-10'>
      <MenuCardsVegStarter />
      <Separator className='my-10' />
    </div>
  )
}

export default Menu