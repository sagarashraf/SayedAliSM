import React from "react";
import { Card } from "react-bootstrap";
import "./TotalClaims.css";

/**
 * @author
 * @function TotalClaims
 **/

export const TotalClaims = (props) => {
	return (
		<Card className=' claims-card-count'>
			<Card.Body className='py-1'>
				<h6 className='mb-1'>Total Number of claims</h6>
				<h5 className='mb-1'>185</h5>
			</Card.Body>
		</Card>
	);
};
