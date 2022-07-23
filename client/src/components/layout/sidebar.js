import React, {useState } from 'react'

export default function Sidebar({isSidebarPulled,toggleSidebarState}) {
  return (
    <>
    
      {/* <div className={'opposite-sidebar '+(isSidebarPulled?"":"opposite-sidebar-pushed") } ></div> */}
      <div className={'sidebar '+(isSidebarPulled?"":"sidebar-pushed")}>
        <div onClick={toggleSidebarState} className="burger cursor-pointer" >
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
        </div>
        <div>
          <p>Home</p>
          <p>Chat</p>
        </div>
      </div>
    </>
  )
}
