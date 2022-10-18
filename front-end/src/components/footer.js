import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import './footer.css';

const Footer = () => {
return (
	<div class="footer">
      <div class="overlay">
          <img src={require('./images/footer.png')} alt="Home Finder"></img>
          <footer>&copy; Copyright 2022 Home Finder</footer>
      </div>
  
	</div>
);
};
export default Footer;
