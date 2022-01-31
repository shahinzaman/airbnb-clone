import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
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