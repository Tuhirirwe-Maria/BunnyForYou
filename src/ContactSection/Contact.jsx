import React from 'react'

import "./Contact.css"

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa'; 
import { FaWhatsapp } from 'react-icons/fa';

function contact() {
 
    return (
        <div className="contact">
            <button className="button">Get in Touch</button>
            <div className="icons">
              <FaFacebook className="icon"/>
              <FaLinkedinIn className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />  
              <FaPhone className="icon" />  
              <FaWhatsapp className="icon" />
            </div>
        </div>
    )
}

export default contact
