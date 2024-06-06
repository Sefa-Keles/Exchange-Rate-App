import React from 'react';
import navbarStyle from '../styles/Navbar.module.scss'

const Navbar = ({ onLoginClick }) => {
  return (
      <div className={navbarStyle.navbar}>
          <div className={navbarStyle.logo}/>
          <div className={navbarStyle.login} onClick={onLoginClick}>Log In</div>
      </div>
  )
}

export default Navbar;
