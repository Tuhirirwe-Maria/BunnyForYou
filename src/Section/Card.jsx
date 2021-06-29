import React from 'react'

import Button from "./Button"

function Card({image, text, price}) {
    return (
        <div className="card">
            <img src={image} alt="rabbit" className="card_image" />
            <p className="card_text">{text}</p>
            <p className="card_price">{price}</p>
            <Button/>
        </div>
    )
}

export default Card
