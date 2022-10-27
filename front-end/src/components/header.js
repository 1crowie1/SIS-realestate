import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './header.css';
import Logo from '../images/home_finder_4.svg';

function Header() {
  return (
      <section className="header">
        <div className="header-logo">
          {/* <img src={require('.././images/home_finder_4.svg')} alt="Home Finder" width="30%" height="30%"></img> */}
          <img src={Logo} alt="Home Finder" width="150vw" height="150vh"></img>
        </div>
        {/* <h1>Find your dream home.</h1> */}
        <div className="header-text">
          <h3>We are Simply The Best in What We Offer!</h3>
        </div>
      </section>
  );
}

export default Header;