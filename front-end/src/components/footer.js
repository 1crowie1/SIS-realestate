import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import './footer.css';

const Footer = () => {
return (
	<div class="footer">
	<Container>
		<Row>
		<Col>
      <p>Home</p>
			<p>About Us</p>
      <p>Contact Us</p>
		</Col>
		<Col>
			<p>
      <img src={require('./images/footer.png')} alt="Home Finder"></img>
      </p>
		</Col>
		</Row>
	</Container>
	</div>
);
};
export default Footer;
