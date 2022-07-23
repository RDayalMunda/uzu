import React, {useState } from 'react'

export default function Sidebar({sidebarData,toggleSidebarState}) {
  return (
    <>
    
      {/* <div className={'opposite-sidebar '+(isSidebarPulled?"":"opposite-sidebar-pushed") } ></div> */}
      <div className={'sidebar '+(sidebarData.isSidebarPulled?"":"sidebar-pushed")}>
        <div onClick={toggleSidebarState} className="burger cursor-pointer" >
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
        </div>
        <div className='menubar'>
          <div className='cursor-pointer menu-item active'> <span>Game</span> </div>
          <div className='cursor-pointer menu-item menu-sub-item'> <span>Save</span> </div>
          <div className='cursor-pointer menu-item menu-sub-item'> <span>Load</span> </div>
          <div className='cursor-pointer menu-item menu-sub-item'> <span>Delete</span> </div>
        </div>
      </div>
    </>
  )
}
