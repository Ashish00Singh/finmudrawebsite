"use client"
import React, { Component, useState } from 'react'

export default function Mobilemenu({hideShow}:any) {
  const [showSubitem, setShowSubitem] = useState(false);
  // const hideSubitem = !showSubitem;


  return (
    <div className='MmenuDropdownContainer'>
      {/* <button
        className='MnavDrop px-5 py-1 w-full'
        onClick={() => {
          setShowSubitem(!showSubitem);
        }}>
        <p>Menu Title</p>
        <Image 
          src={mobil} // Replace with your arrow icon path
          priority={false} 
          className={`navDropIcon transition-transform duration-300 ${showSubitem ? 'rotate-180' : 'rotate-0'}`} 
          alt="" 
          width={16}
          height={16}
        />
      </button> */}
      
      <div className={`dropdown-wrapper ${hideShow ? 'open' : ''}`}>
        <div className='Mdropdown'>
          <ul className='Mdropdown-item'>
            <li className='Mmenu-item'><a href="#">Sub Item - 1</a></li>
            <li className='Mmenu-item'><a href="#">Sub Item - 2</a></li>
            <li className='Mmenu-item'><a href="#">Sub Item - 3</a></li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .MmenuDropdownContainer {
          position: relative;
        }

        .MnavDrop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .MnavDrop:hover {
          background: #f5f5f5;
          border-color: #ccc;
        }

        .navDropIcon {
          transition: transform 0.3s ease;
        }

        .dropdown-wrapper {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(-10px);
        }

        .dropdown-wrapper.open {
          max-height: 200px; /* Adjust based on your content */
          opacity: 1;
          transform: translateY(0);
        }

        .Mdropdown {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-top: none;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .Mdropdown-item {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .Mmenu-item {
          padding: 0;
        }

        .Mmenu-item a {
          display: block;
          padding: 12px 20px;
          text-decoration: none;
          color: #333;
          transition: background-color 0.2s ease;
          // border-bottom: 1px solid #f0f0f0;
        }

        .Mmenu-item:last-child a {
          border-bottom: none;
        }

        .Mmenu-item a:hover {
          background-color: #f8f9fa;
          color: #007bff;
        }

        /* Alternative animation using height instead of max-height */
        .dropdown-wrapper-alt {
          overflow: hidden;
          height: 0;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: scaleY(0);
          transform-origin: top;
        }

        .dropdown-wrapper-alt.open {
          height: auto;
          opacity: 1;
          transform: scaleY(1);
        }
      `}</style>
    </div>

  )
}
