import React from 'react';
import data from '../earthquake_data/earthquakedata.json';

const Header = () => {
    return (
        <header>
            <img className="site-logo" src={data.site.logoImage} alt="Realtor.com Logo" />
            <h1 className="header-title">{data.site.title}</h1>
            <a href="">Welcome, {data.profile.firstName}</a>
        </header>
    );
}

export default Header;
