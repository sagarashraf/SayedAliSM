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
		<Container className='mt-4' fluid>
			<Row>
				<Col lg={6} md={12}>
					<Card className='border-0'>
						<Card.Body className='text-center mb-1'>
							<h1 className='tag-color mt-lg-5 mt-xs-1'>Smarter Payouts</h1>
							<p className='info-text mt-3'>
								A Self Quoting Platform Designed Especially for structured
								settlement lottery and annuity payments. When Settlement
								companies compete, you WIN!{" "}
							</p>
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
						<h6>Upfront Offer in 2 mins or less Guaranteed</h6>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
