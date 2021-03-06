import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from '../../firebase/firebase.utils';

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <header className="header">
    <Link className='logo-container' to="/">
        <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {
          currentUser ?
          <a href='/' className='option' onClick={() => auth.signOut()}>SIGN OUT</a> 
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>
  </header>
);


export default Header;