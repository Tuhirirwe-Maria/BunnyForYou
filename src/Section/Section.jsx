import React from 'react'

import TitleBar from "./TitleBar"
import Card from "./Card"
import { bunnyListMeat, bunnyListFur, bunnyListPet } from "./card"

import "./Section.css"

export default function Section() {
  const bunnyMeat =  bunnyListMeat.map((item, key) =>(
   
    <Card
      key={item.id}
      image={item.image}
      text={item.text}
      price={item.price}
    />
  ));
  const bunnyFur =  bunnyListFur.map((item, key) =>(
   
    <Card
      key={item.id}
      image={item.image}
      text={item.text}
      price={item.price}
    />
  ));
  const bunnyPet =  bunnyListPet.map((item, key) =>(
   
    <Card
      key={item.id}
      image={item.image}
      text={item.text}
      price={item.price}
    />
  ));
    return (
        <div className="section">
          <TitleBar title="Great for Meat"/>
          <div className="card_section">  
            {bunnyMeat}
           </div>
           <TitleBar title="Great for Fur"/>
           <div className="card_section">
            {bunnyFur}
            </div>
            <TitleBar title="Great as Pets"/>
           <div className="card_section">
            {bunnyPet}
            </div>
         
          </div>
        
    );
}

