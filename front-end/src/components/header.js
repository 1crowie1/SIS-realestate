import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './header.css';

function Header() {
  return (
      <section className="header">
        <div className="header-logo">
          <img src={require('.././images/3.png')} alt="Home Finder" width="70" height="70"></img>
        </div>
        {/* <h1>Find your dream home.</h1> */}
        <div className="header-text">
          <h3>We are Simply The Best in What We Offer!</h3>
        </div>
      </section>
  );
}

export default Header;