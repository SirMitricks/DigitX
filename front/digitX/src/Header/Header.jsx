import React from 'react';
import classes from '../Header/Header.module.scss';
import {Picturies} from '../assets/Fhoto.js';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header className={classes}>
                <div>
                    <img src={Picturies.Logo} alt=""/>
                    <div>
                        <Link to='/Home'>Home</Link>
                        <Link to='/Services'>Services</Link>
                        <Link to='/Progect'>Projects</Link>
                        <Link to='/About'>About Us</Link>
                        <Link to='/Contact'>Contact Us</Link>
                        <Link to='/Carees'>Careers</Link>
                        <Link to='/Blogs'>Blogs</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
