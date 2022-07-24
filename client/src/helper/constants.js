const sidemenuData = {
    isSidebarPulled : false,
    activeMenu: {
        menuId: 0,
        submenuId: 1,
        isSubmenu: true
    },
    sidemenu:[
        {
            id: 0,
            title: "Game",
            submenu:[
                { id: 0, title: "Save" },
                { id: 1, title: "Load" },
                { id: 2, title: "Delete" }
            ],
            expanded: true,
        },
        {
            id: 1,
            title: "Help",
        }
    ] 
}

export {
    sidemenuData,
}