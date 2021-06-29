import React from 'react'

import TitleBar from "./TitleBar"
import Card from "./Card"

import "./Section.css"

function Section() {
    return (
        <div className="section">
            <TitleBar  text="Great for meat"/>
            <div className="card_section">
            <Card
              image="/Images/Chinchilla.jpg"
              text="Chinchilla"
              price="$60"
            />
              <Card
              image="/Images/New Zealand.jpg"
              text="New Zealand"
              price="$55"
            />
              <Card
              image="/Images/Californian.jpg"
              text="Californian"
              price="$65"
            />
              <Card
              image="/Images/Chinchilla.jpg"
              text="Palomino"
              price="$70"
            />
            </div>
            <TitleBar text="Great for fur"/>
            <div className="card_section">
            <Card
              image="/Images/german angora.jfif"
              text="German Angora"
              price="$40"
            />
              <Card
              image="/Images/giant angora.jfif"
              text="Giant Angora"
              price="$40"
            />
              <Card
              image="/Images/Jersey-Wooly.jpg"
              text="Jersey-Wooly"
              price="$40"
            />
              <Card
              image="/Images/American-Fuzzy-Lop-Rabbit-1.jpg"
              text="American-Fuzzy-Lop-Rabbit"
              price="$40"
            />
            </div>
            <TitleBar text="Great as pets"/>
            <div className="card_section">
            <Card
              image="/Images/Holland Lop.jpg"
              text="Holland Lop"
              price="$40"
            />
              <Card
              image="/Images/dwarfhotot.png"
              text="Dwarfhotot"
              price="$40"
            />
              <Card
              image="/Images/mini lop.jpg"
              text="Mini Lop"
              price="$40"
            />
              <Card
              image="/Images/mini-lop.jpg"
              text="Mini Lop "
              price="$40"
            />
            </div>
        </div>
    )
}

export default Section
