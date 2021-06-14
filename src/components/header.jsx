import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { logoImage, title } = props.siteData;
    const { firstName } = props.userData;

    return (
        <header>
            <Link to={'/'}>
                <img className="site-logo" src={logoImage} alt="Realtor.com Logo" />
            </Link>
            <h1 className="header-title">{title}</h1>
            <Link to={'/profile'}>Welcome, { firstName }</Link>
        </header>
    );
}

export default Header;
