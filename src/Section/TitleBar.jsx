import React from 'react'

// import TitleBarText from "./TitleBarText"

function TitleBar({text}) {
    return (
        <div className="titleBar">
             <h2 className="titleBar_text">{text}</h2> 
        </div>
    )
}

export default TitleBar
