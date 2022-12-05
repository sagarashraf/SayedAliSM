import React from "react";
import "./CalimAmount.css";
import { Card } from "react-bootstrap";

/**
 * @author
 * @function CalimAmount
 **/

export const CalimAmount = (props) => {
	return (
		<Card className=' claims-card-amount'>
			<Card.Body className='py-1'>
				<h6 className='mb-1'>Claim Amount</h6>
				<h5 className='mb-1'>800,787.44</h5>
			</Card.Body>
		</Card>
	);
};
