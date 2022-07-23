import React, {useState } from 'react'

export default function Sidebar({sidebarData,toggleSidebarState}) {
  return (
    <>
    
      {/* <div className={'opposite-sidebar '+(isSidebarPulled?"":"opposite-sidebar-pushed") } ></div> */}
      <div className={'sidebar '+(sidebarData?.isSidebarPulled?"":"sidebar-pushed")}>
        <div onClick={toggleSidebarState} className="burger cursor-pointer" >
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
        </div>
        <div className='menubar'>
          {
            sidebarData?.sidemenu.map((menuItem, m) => { return (
              <div key={'menuItem_'+m} >
                <div className='cursor-pointer menu-item'> <span>{menuItem.title}</span> </div>

                {
                  (menuItem?.submenu?.length && menuItem.isActive )? menuItem.submenu.map( (subMenu, s)=>(
                    <div key={'submenu_'+s} className='cursor-pointer menu-item menu-sub-item'> <span>{subMenu.title}</span> </div>
                  )  ) :""
                }
              
              </div>
            ) } )
          }
        </div>
      </div>
    </>
  )
}
