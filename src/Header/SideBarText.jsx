import React from 'react'

function SideBarText({link, text}) {
    return (
        <div>
            <p href ={link} className="side_barText">{text}</p>
            
        </div>
    )
}

export default SideBarText
