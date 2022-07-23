import { useState } from "react";

import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Sidebar from "./components/layout/sidebar";
import Todo_list from "./components/todos/todo-list";
function App() {

  //to toggle sidebar
  const [isSidebarPulled, setSidebarState] = useState(true)
  const toggleSidebarState = ()=>{ setSidebarState(!isSidebarPulled) }

  return (
    <div>
      <Sidebar
        isSidebarPulled={isSidebarPulled}
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
