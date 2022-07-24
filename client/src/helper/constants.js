const sidemenuData = {
    isSidebarPulled : true,
    sidemenu:[
        {
            id: 0,
            title: "Game",
            isActive: false,
            submenu:[
                { id: 0, title: "Save", isActive: false },
                { id: 1, title: "Load", isActive: true },
                { id: 2, title: "Delete", isActive: false }
            ],
            expanded: true,
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