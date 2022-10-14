import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import ImageThumbnail from "../../assets/media/thumbnail.jpg";
import video from "../../assets/media/Smarter-Payouts.mp4";
import ReactPlayer from "react-player";

/**
 * @author
 * @function AboutUs
 **/

export const AboutUs = (props) => {
	return (
		<Container fluid className='pb-5'>
			<Row>
				<div className='text-center mb-3'>
					<h1 className='tag-color-black'>About Us</h1>
					<h5 className='tag-color-aboutUs'>The Power of Self Quote's</h5>
					<h4 className='tag-color-black'>
						Upfront, No Obligation, No Pressure
					</h4>
				</div>
			</Row>
			<Row>
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
					<Container className='text-center mt-3'>
						<h6 className='px-lg-5 px-xs-2 general-text-spacing'>
							Industry leading technology which provides an estimate for an
							early payout for your future payments
						</h6>
					</Container>
				</Col>
				<Col lg={6} md={12} className='mt-lg-5 mt-xs-2'>
					<div className='we-promise-tag mb-5'>
						<h3 className='we-promise-text'>We Promise!</h3>
					</div>
					<Row className='mt-5'>
						<Col md={6} sm={12} className='mb-2'>
							<Card className='shadow border-0'>
								<Card.Body>
									<div className='text-center'>
										<img src={require("../../assets/img/transparency.png")} />
										<h5 className='mt-3'>100% Transparency</h5>
										<p className='general-text-spacing'>
											Receive an approx. payout range with no hidden cost.
										</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6} sm={12} className='mb-2'>
							<Card className='shadow border-0'>
								<Card.Body className='px-1'>
									<div className='text-center'>
										<img
											width={30}
											height={30}
											src={require("../../assets/img/obligation.png")}
										/>
										<h5 className='mt-3'>No Obligation, No Pressure</h5>
										<p className='px-1'>
											Make the decision according to your needs and timeline.
										</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <Col className='mt-lg-5 mt-xs-1'>
							<Card className='shadow border-0'>
								<Card.Body className='text-center general-text-spacing'>
									Zero sales pressure. Make the decision according to your needs
									and timeline. Zero sales pressure.
								</Card.Body>
							</Card>
						</Col> */}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
