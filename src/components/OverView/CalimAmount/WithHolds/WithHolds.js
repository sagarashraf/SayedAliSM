import React from "react";
import "./WithHolds.css";
import { Card } from "react-bootstrap";

/**
 * @author
 * @function WithHolds
 **/

export const WithHolds = (props) => {
	return (
		<Card className=' claims-card-withhold'>
			<Card.Body className='py-1'>
				<h6 className='mb-1'>Adj / Withhold</h6>
				<h5 className='mb-1'>52,189.09</h5>
			</Card.Body>
		</Card>
	);
};
