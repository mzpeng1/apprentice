import React from 'react'
import "./Header.css";
import logo from '../images/logo.png';
import logoTitle from '../images/logoTitle.png';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { Link } from "gatsby";
import { useStateValue } from "../context/StateProvider";

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt=""/>
                <img src={logoTitle} alt=""/>
               
            </div>
            <div className='header__mid'>
                <div className='header__option'>
                    <Link to="/" activeStyle={{ color: "white" }}>
                        Home
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/Academics/" activeStyle={{ color: "white" }}>
                        Academics
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/Living/" activeStyle={{ color: "white" }}>
                        Living
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/Finance/" activeStyle={{ color: "white" }}>
                        Finance
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/Health/" activeStyle={{ color: "white" }}>
                        Health
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/Forums/" activeStyle={{ color: "white" }}>
                        Forums
                    </Link>
                </div>
            </div>
            <div className='header__right'>
                <div className="header__input">
                    <SearchIcon fontSize='large'/>
                    <input placeholder="Need Help?" type="text"></input>
                </div>
                <div className="header__info">
                    { !user ? (
                        <>
                        <Link to="/Login/">
                        <Avatar />
                        <h4>Login</h4>
                        </Link>
                        </>
                    ) : (
                        <>
                        <Link to="/Profile/">
                        <Avatar src={user.photoURL}/>
                        <h4>{user.displayName}</h4>
                        </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
