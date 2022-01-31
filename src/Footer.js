import React from 'react'
import './Footer.css'
import { useContext } from 'react';
import { ThemeContext } from './context';

function Footer() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        // BEM
        <div className='footer' style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}>
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer