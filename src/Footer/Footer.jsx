import React from 'react'

import "./Footer.css" 

function Footer() {
     const styleObj = {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        // paddingTop: "100px",
        // spacing: "50px"
        
    }
    return (
        <div className="footer">
            <p className="footer_text" style={styleObj}> &copy; || 2021</p>
        </div>
    )
}

export default Footer
