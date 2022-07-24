import { useState } from "react";
import { sidemenuData } from "./helper/constants"
import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Sidebar from "./components/layout/sidebar";
import Todo_list from "./components/todos/todo-list";
function App() {

  //to toggle sidebar
  const [sidebarData, setSidebarData] = useState(sidemenuData)
  const toggleSidebarState = ()=>{ setSidebarData({ ...sidebarData, isSidebarPulled: !sidebarData.isSidebarPulled }) }
  const setMenuActive = (menuId, submenuId, attr,inActivateRest) => {
    for (let sidemenu of sidebarData.sidemenu){
      if (attr=='expanded'){
        if (sidemenu.hasOwnProperty(attr)){
          sidemenu[attr] = menuId==sidemenu.id ? !sidemenu[attr] : false
        }
      }else if (attr=='isActive'){
        if (sidemenu.hasOwnProperty(attr)) {
          sidemenu[attr] = sidemenu.id==menuId?true:false
        }
        if (sidemenu?.submenu?.length){
          for (let submenu of sidemenu.submenu){
            if (menuId==sidemenu.id && submenu.id==submenuId){
              submenu[attr] = true
              if (sidemenu.hasOwnProperty('expanded')) { sidemenu['expaned'] = true }
            }else{
              submenu[attr] = false
              sidemenu[attr] = false
            }
          }
        }
      }
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
      <Todo_list></Todo_list>
    </div>
  );
}
export default App;
