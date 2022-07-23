const sidemenuData = {
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
}

export {
    sidemenuData,
}