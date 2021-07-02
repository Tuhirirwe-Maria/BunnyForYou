import React from 'react'

// import TitleBarText from "./TitleBarText"

function TitleBar({title}) {
    return (
        <div className="titleBar">
             <h2 className="titleBar_text">{title}</h2> 
        </div>
    ) 
}

export default TitleBar
