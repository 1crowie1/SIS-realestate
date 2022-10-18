import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './header.css';

const Header = () => {
  return (
    <div class = "header">
      <div class="overlay">
          <h1>We are Simply The Best in What We Offer!</h1>
          <img src={require('./images/image-1.png')} alt="Home Finder"></img>
      </div>
    </div>
  );
}

export default Header;