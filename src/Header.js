import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context';

function Header() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        // BEM
        <div className='header' style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>

            {/* BEM */}
            <div className='header__center' style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode && "white",
            }}>
                <input type='text' style={{
                    backgroundColor: darkMode ? "#222" : "white",
                    color: darkMode && "white",
                }} />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
