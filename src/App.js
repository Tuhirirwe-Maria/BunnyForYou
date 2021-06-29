import React from "react";

import Navigation from "./Navigation/Navigation"
import Header from "./Header/Header"
import Section from "./Section/Section"
import Footer from "./Footer/Footer"
import Contact from "./ContactSection/Contact"

import "./App.css"

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Header/>
      <Section/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App


