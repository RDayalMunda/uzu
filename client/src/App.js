import { useState } from "react";
import { sidemenuData } from "./helper/constants"
import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Sidebar from "./components/layout/sidebar";
import Todo_list from "./components/todos/todo-list";

// //Game Components
import LoadGame from "./components/game/load/load"
import SaveGame from "./components/game/save/save"
import DeleteGame from "./components/game/delete/delete"

function App() {

  //to toggle sidebar
  const [sidebarData, setSidebarData] = useState(sidemenuData)
  const toggleSidebarState = ()=>{ setSidebarData({ ...sidebarData, isSidebarPulled: !sidebarData.isSidebarPulled }) }
  const setMenuActive = (menuId, submenuId, attr, inActivateRest) => {
    if ( attr=='expanded' && sidebarData.sidemenu[menuId].hasOwnProperty(attr) ){
      sidebarData.sidemenu[menuId][attr] = !sidebarData.sidemenu[menuId][attr]
    }
    if ( attr=='isActive'){
      sidebarData.activeMenu['menuId'] = submenuId==null?menuId:null
      sidebarData.activeMenu['submenuId'] = submenuId
      sidebarData.activeMenu['isSubmenu'] = submenuId==null?false:true
    }
    setSidebarData({...sidebarData})
  }


  return (
    <div>
      <Sidebar
        sidebarData={sidebarData}
        toggleSidebarState={toggleSidebarState}
        setMenuActive={setMenuActive}
      ></Sidebar>
      <Header
        toggleSidebarState={toggleSidebarState}
      ></Header>
      {/* Dynamically adding Components According to what compoent is active */}
      <LoadGame></LoadGame>

    </div>
  );
}
export default App;
