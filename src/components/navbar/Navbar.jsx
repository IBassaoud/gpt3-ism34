import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <Link to="home" smooth duration={100}>
      <p>Home</p>
    </Link>
    <Link to="wgpt3" smooth duration={100}>
      <p>What is GPT3</p>
    </Link>
    <Link to="possibility" smooth duration={100}>
      <p>Open AI</p>
    </Link>
    <Link to="features" smooth duration={100}>
      <p>Case studies</p>
    </Link>
    <Link to="blog" smooth duration={100}>
      <p>Library</p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27}  onClick={ () => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27}  onClick={ () => setToggleMenu(true)}/>
        }
        {toggleMenu &&  (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <Menu />
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
            </div>
          </div>
        )

        }
      </div>
    </div>
  );
};

export default Navbar;
