import React from 'react'
import '../../../app/Style.css'
import down from '../../../../asset/icon/down-chevron.svg'
import Image from 'next/image'

type Props={
  menu_Tile:String,
  showDrop?:boolean
}
const NavigationMenuDropdown = ({
  menu_Tile ='Menu title',
  showDrop=true,
}:Props) => {
  return (
    <div className='nenuDropdownContainer'>
      <div className='navDrop px-5 py-1 rounded-sm'>
        <p className='menutitle'>{menu_Tile}</p>
        {showDrop && (<Image src={down} priority={false} className='navDropIcon' alt="" /> )}
      </div>
      {showDrop && (<div className='dropdown'>
        <ul className='dropdown-item'>
          <li className='menu-item'><a href="#">1</a></li>
          <li className='menu-item'><a href="#">2</a></li>
          <li className='menu-item'><a href="#">3</a></li>
        </ul>
      </div>)}
    </div>
  )
}

export default NavigationMenuDropdown
