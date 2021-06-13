import React from 'react';
import { Link } from "react-router-dom";
import data from '../earthquake_data/earthquakedata.json';

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <img className="site-logo" src={data.site.logoImage} alt="Realtor.com Logo" />
            </Link>
            <h1 className="header-title">{data.site.title}</h1>
            <Link to={'/profile'}>Welcome, {data.profile.firstName}</Link>
        </header>
    );
}

export default Header;
