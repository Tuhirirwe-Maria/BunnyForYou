import React from 'react'

import Input from "./Input";


import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <img className="navigation_logo" src="/Images/Logo.png" alt="BunnyForYou logo" />
            <Input/>
            <button className="button">Login</button>

            
        </div>
    )
}

export default Navigation