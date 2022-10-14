import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./ClientCount.css";

/**
 * @author
 * @function ClientCount
 **/

export const ClientCount = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<Card className=' border-0'>
						<Card.Body className='text-center'>
							<h3 className='tag-color mt-lg-3 mt-xh-1'>Our Legend</h3>
							<div className='provided-offers-div'>
								<div className='w-50 text-center'>
									<p className='offer-provided-text'>Offers Provided</p>
									<h2 className='provided-offers-count'>1300+</h2>
								</div>
								<div className='w-50 text-center'>
									<p className='offer-accepted-text'>Offers Accepted</p>
									<h2 className='accepted-offers-count'>1200+</h2>
								</div>
								<div className='w-50 text-center'></div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
