import { useState } from "react";

import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Sidebar from "./components/layout/sidebar";
import Todo_list from "./components/todos/todo-list";
function App() {

  //to toggle sidebar
  const [sidebarData, setSidebarData] = useState({
    isSidebarPulled : true,
    sidemenu:[
      {
        title: "Game",
        isActive: false,
        submenu:[
          { title: "Save", isActive: false },
          { title: "Load", isActive: false },
          { title: "Delete", isActive: false }
        ]
      },
      {
        title: "Help",
        isActive: true,
      }
    ] 
  })
  const toggleSidebarState = ()=>{ setSidebarData({ ...sidebarData, isSidebarPulled: !sidebarData.isSidebarPulled }) }

  return (
    <div>
      <Sidebar
        sidebarData={sidebarData}
        toggleSidebarState={toggleSidebarState}
      ></Sidebar>
      <Header
        toggleSidebarState={toggleSidebarState}
      ></Header>
      <Todo_list></Todo_list>
    </div>
  );
}
export default App;
