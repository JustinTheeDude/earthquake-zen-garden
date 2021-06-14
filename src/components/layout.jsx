import React from 'react';
import Header from '../components/header.jsx';

const Layout = (props) => {
    return (
        <>
            <Header siteData={props.siteData} userData={props.userData}/>
            {props.children}
        </>
    )
}

export default Layout;
