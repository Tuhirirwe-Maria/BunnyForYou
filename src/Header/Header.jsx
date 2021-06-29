import React from 'react'


import SideBar from "./SideBar"

import "./Header.css"

function Header() {
       
    return (
        <div className="header">
             <SideBar/>
            <img src="/Images/Rabbits.jpg" alt="Rabbits" className="header_image" />            
        </div>
    )
}

export default Header
