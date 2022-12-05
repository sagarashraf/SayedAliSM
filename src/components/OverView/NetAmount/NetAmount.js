import React from "react";
import "./NetAmount.css";
import { Card } from "react-bootstrap";

/**
 * @author
 * @function NetAmount
 **/

export const NetAmount = (props) => {
	return (
		<Card className=' claims-card-netAmount'>
			<Card.Body className='py-1'>
				<h6 className='mb-1'>Net Amount</h6>
				<h5 className='mb-1'>759,248.85</h5>
			</Card.Body>
		</Card>
	);
};
