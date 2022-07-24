import React, {useState } from 'react'

export default function Sidebar({sidebarData,toggleSidebarState, setMenuActive}) {

  const onClickSidemenu = (menuId, submenuId, attr, inActivateRest)=>{
    setMenuActive(menuId, submenuId, attr , inActivateRest)
  }

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
                <div
                  onClick={ ()=>onClickSidemenu(menuItem.id, null, menuItem?.submenu?.length?'expanded':'isActive', true) }
                  className={'cursor-pointer menu-item '+(menuItem.isActive?'active':'')}>
                    <span>{menuItem.title} {menuItem.expanded?"-":menuItem.expanded==false?"+":""}</span>
                </div>

                {
                  (menuItem?.submenu?.length && menuItem.expanded )? menuItem.submenu.map( (subMenu, s)=>(
                    <div
                      key={'submenu_'+s}
                      onClick={()=>onClickSidemenu( menuItem.id, subMenu.id, 'isActive' , true )}
                      className={'cursor-pointer menu-item menu-sub-item '+(subMenu.isActive?'active':'')}>
                      <span>{subMenu.title}</span>
                    </div>
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
