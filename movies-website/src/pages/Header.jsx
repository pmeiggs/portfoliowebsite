import React from 'react';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import "./header.css";
import logo from '../images/logo.png';
import Pfp from '../components/Pfp';


function Header() {
    return (
        <header> 
            <img className="logoimage" src="" alt="Logo" />
            <a href="/" className="logo">Transactions123</a>

            <ul className="nav">

                {
                    navListData.map(nav=>(
                        <NavListItem key={nav._id} nav={nav}/>    
                    ))
                }
                
            </ul>
            {/* <Search /> */}
            <Pfp />
        </header>
        
    );

}

export default Header;