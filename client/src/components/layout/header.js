import React from 'react'

export default function Header({toggleSidebarState}) {
  return (
    <div className='header'>
      <div onClick={toggleSidebarState} className="burger cursor-pointer" >
        <div className='burger-bar'></div>
        <div className='burger-bar'></div>
        <div className='burger-bar'></div>
      </div>
    </div>
  )
}
