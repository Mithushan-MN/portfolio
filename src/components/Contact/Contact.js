import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import "./Contact.css";
import {Facebook,Instagram,LinkedIn} from "@mui/icons-material"

const Contact = () => {
  return (
    <Element className='contact' id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>mithushan0099@gmail.com</span>
            </p>
            <p>
                GitHub Username : <span>Mithushan-MN</span>
            </p>
        <div className='contact__icons'>
            <a href='www.google.com'>
                <IconButton>
                    <LinkedIn />
                </IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton>
                    <Facebook />
                </IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton>
                    <Instagram />
                </IconButton>
            </a>

        </div>
        </div>
      
    </Element>
  )
}

export default Contact
