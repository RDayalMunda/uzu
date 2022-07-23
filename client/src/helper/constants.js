const sidemenuData = {
    isSidebarPulled : true,
    sidemenu:[
        {
            id: 0,
            title: "Game",
            isActive: false,
            submenu:[
                { id: 0, title: "Save", isActive: false },
                { id: 1, title: "Load", isActive: false },
                { id: 2, title: "Delete", isActive: false }
            ],
            expanded: false,
        },
        {
            id: 1,
            title: "Help",
            isActive: false,
        }
    ] 
}

export {
    sidemenuData,
}