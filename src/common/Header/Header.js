import React from 'react';
import Navbar from './Navbar';
import Head from './Head';
import Search from './Search';
import './Header.css';
function Header({CartItem}) {
    return (
        <>
            <Head/>
            <Search CartItem={CartItem}/>
            <Navbar/>
            
        </>
    );
}

export default Header;