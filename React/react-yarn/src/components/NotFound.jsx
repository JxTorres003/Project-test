// import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import SiteLogo from "../img/site-unavailable-xsm.jpg";
import React from "react";

const NotFound = () => {
	return (
		<Card className="text-center">
			<Card.Img fluid variant="top" src={SiteLogo} />
			<Card.Body>
				<Card.Title>Sorry, Page not found</Card.Title>
				<Card.Text>Site Un-Available</Card.Text>
				<Button href="/" variant="primary">
					Return Home
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">source not found</Card.Footer>
		</Card>
	);
};

export default NotFound;