import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import MenuPopupState from './MenuPopupState';

function Header() {
    return (
        <div className="header__container">
            <div className="header">

                <Link to="/">
                    <h1 className="header__logo">LOGOHERE</h1>
                </Link>
                <div className="header__search">
                     <input className="header__searchInput" type="text" placeholder="what are you looking for?" />
                     <SearchIcon className="header__searchIcon" />
                </div>

                  <div className="header__nav">
                      {/* <AccountCircleIcon  /> */}
                      <MenuPopupState />
                      <Link to="/cart">
                         <ShoppingCartOutlinedIcon className="header__navIcon" />
                     </Link>   
                         <FavoriteIcon className="header__navIcon" />
                     </div>
            </div>  

            <nav>
                 <ul>
                   <li > <a href="" > Men </a> </li>
                   <li > <a href="/allProducts" > AllProducts </a> </li>
                    <li > <a href="/product" > ProductLandingPage </a> </li>
                     <li > <a href="" > Summer </a> </li>
                  </ul>
            </nav>
            
        </div>
    )
}

export default Header;
