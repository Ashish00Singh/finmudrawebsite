import React from 'react'
import '../../../app/Style.css'
import down from '../../../../asset/icon/down-chevron.png'
import Image from 'next/image'
import Link from 'next/link'

type Props={
  menu_Tile:String,
  showDrop?:boolean,
  titleLink?:any
  subnavitem?:any
}
const NavigationMenuDropdown = ({
  menu_Tile ='Menu title',
  titleLink='#',
  showDrop=true,
  subnavitem,
}:Props) => {
  return (
    <div className='nenuDropdownContainer'>
      <div className='navDrop px-5 py-1 rounded-sm'>
        {showDrop === true ?  <p className='menutitle'>{menu_Tile}</p>:
        <Link className='menutitle' href={titleLink}>{menu_Tile}</Link> }
        {showDrop && (<Image src={down} priority={false} className='navDropIcon' alt="" /> )}
      </div>



      {showDrop && (<div className='dropdown'>
        <ul className='dropdown-item'>
          {subnavitem.map((item:any, index:number)=>
           <li key={index} className='menu-item'><a href={item.url}>{item.navName} </a></li>
          )}
          <li className='menu-item'><a href="#">1</a></li>
          <li className='menu-item'><a href="#">2</a></li>
          <li className='menu-item'><a href="#">3</a></li>
        </ul>
      </div>)}
    </div>
  )
}

export default NavigationMenuDropdown
