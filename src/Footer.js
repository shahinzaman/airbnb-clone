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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adi</p>
        </div>
    )
}

export default Footer
