import React from 'react'

import SideBarText from "./SideBarText"

function SideBar() {
    return (
        <div className="side_bar">
           <SideBarText text="Great for meat"/> 
           <SideBarText text="Great for fur"/> 
           <SideBarText text="Great as pets"/> 
        </div>
    )
}

export default SideBar
