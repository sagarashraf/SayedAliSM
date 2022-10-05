import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./WhySmarter.css";
import ReactPlayer from "react-player";
import ImageThumbnail from "../../assets/media/thumbnail.jpg";
import video from "../../assets/media/Smarter-Payouts.mp4";

/**
 * @author
 * @function WhySmarter
 **/

export const WhySmarter = (props) => {
	return (
		<Container className='mt-5' fluid>
			<Row>
				<Col lg={6} md={12}>
					<Card className='border-0'>
						<Card.Body className='text-center mb-1'>
							<h3 className='tag-color'>Smarter Payouts</h3>
							<p className='info-text'>
								A Self Quoting Platform Designed Especially for structured
								settlement lottery and annuity payments. When Settlement
								companies compete, you WIN!{" "}
							</p>
							<hr />
							<Card className=' border-0'>
								<Card.Body className='text-center'>
									<h3 className='tag-color mt-3'>Our Legend</h3>
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
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<div className='card-color player-wrapper '>
						<ReactPlayer
							className='react-player'
							url={video}
							playing={true}
							controls
							light={ImageThumbnail}
							width='100%'
							height='100%'
						/>
					</div>
					<div className='text-center mt-3'>
						<h5>Upfront Offer in 2 mins or less Guaranteed</h5>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
