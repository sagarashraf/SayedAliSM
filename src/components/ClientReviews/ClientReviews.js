import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ClientReviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientReviews.css";
import StarRatings from "react-star-ratings";

/**
 * @author
 * @function ClientReviews
 **/

export const ClientReviews = (props) => {
	const settings = {
		dots: true,
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container>
			<Row>
				<div className='text-center mb-3'>
					<h1 className='tag-color-black'>Our Clients</h1>
					<h5 className='tag-color-client'>
						Read what our clients have to say about us
					</h5>
				</div>
			</Row>
			<Row>
				<Col>
					<div className='text-center'>
						<Slider {...settings}>
							<div className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
								<Row className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
									<Col lg={4} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<div>
													<img
														className='review-client'
														src={
															"https://media.istockphoto.com/photos/home-office-picture-id1184331595?k=20&m=1184331595&s=612x612&w=0&h=j22ZdQuQrx7opqVncLtEl1Luf2-o20mAEFvgHiGgZew="
														}></img>
													<h5 className='client-name'>Luke Harper</h5>
													<h5 className='client-des'>CEO, RHYTHEM</h5>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={8} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<h5>Happy to be a Part of this Team</h5>
												<StarRatings
													rating={4}
													starRatedColor='gold'
													//changeRating={this.changeRating}
													numberOfStars={5}
													name='rating'
													starDimension='20px'
												/>
												<Card.Text className='cleint-review-text'>
													It was great working with Smarter Payouts very
													experienced team I must It was great working with
													Smarter Payouts
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
							<div className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
								<Row className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
									<Col lg={4} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<div>
													<img
														className='review-client'
														src={
															"https://media.istockphoto.com/photos/home-office-picture-id1184331595?k=20&m=1184331595&s=612x612&w=0&h=j22ZdQuQrx7opqVncLtEl1Luf2-o20mAEFvgHiGgZew="
														}></img>
													<h5 className='client-name'>Luke Harper</h5>
													<h5 className='client-des'>CEO, RHYTHEM</h5>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={8} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<h5>Happy to be a Part of this Team</h5>
												<StarRatings
													rating={4}
													starRatedColor='gold'
													//changeRating={this.changeRating}
													numberOfStars={5}
													name='rating'
													starDimension='20px'
												/>
												<Card.Text className='cleint-review-text'>
													It was great working with Smarter Payouts very
													experienced team I must It was great working with
													Smarter Payouts
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
							<div className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
								<Row className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
									<Col lg={4} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<div>
													<img
														className='review-client'
														src={
															"https://media.istockphoto.com/photos/home-office-picture-id1184331595?k=20&m=1184331595&s=612x612&w=0&h=j22ZdQuQrx7opqVncLtEl1Luf2-o20mAEFvgHiGgZew="
														}></img>
													<h5 className='client-name'>Luke Harper</h5>
													<h5 className='client-des'>CEO, RHYTHEM</h5>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={8} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<h5>Happy to be a Part of this Team</h5>
												<StarRatings
													rating={4}
													starRatedColor='gold'
													//changeRating={this.changeRating}
													numberOfStars={5}
													name='rating'
													starDimension='20px'
												/>
												<Card.Text className='cleint-review-text'>
													It was great working with Smarter Payouts very
													experienced team I must It was great working with
													Smarter Payouts
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
							<div className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
								<Row className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
									<Col lg={4} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<div>
													<img
														className='review-client'
														src={
															"https://media.istockphoto.com/photos/home-office-picture-id1184331595?k=20&m=1184331595&s=612x612&w=0&h=j22ZdQuQrx7opqVncLtEl1Luf2-o20mAEFvgHiGgZew="
														}></img>
													<h5 className='client-name'>Luke Harper</h5>
													<h5 className='client-des'>CEO, RHYTHEM</h5>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={8} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<h5>Happy to be a Part of this Team</h5>
												<StarRatings
													rating={4}
													starRatedColor='gold'
													//changeRating={this.changeRating}
													numberOfStars={5}
													name='rating'
													starDimension='20px'
												/>
												<Card.Text className='cleint-review-text'>
													It was great working with Smarter Payouts very
													experienced team I must It was great working with
													Smarter Payouts
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
							<div className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
								<Row className='px-lg-5 px-md-2 px-sm-2 px-xs-2'>
									<Col lg={4} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<div>
													<img
														className='review-client'
														src={
															"https://media.istockphoto.com/photos/home-office-picture-id1184331595?k=20&m=1184331595&s=612x612&w=0&h=j22ZdQuQrx7opqVncLtEl1Luf2-o20mAEFvgHiGgZew="
														}></img>
													<h5 className='client-name'>Luke Harper</h5>
													<h5 className='client-des'>CEO, RHYTHEM</h5>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={8} md={12}>
										<Card className='h-100 border-0'>
											<Card.Body>
												<h5>Happy to be a Part of this Team</h5>
												<StarRatings
													rating={4}
													starRatedColor='gold'
													//changeRating={this.changeRating}
													numberOfStars={5}
													name='rating'
													starDimension='20px'
												/>
												<Card.Text className='cleint-review-text'>
													It was great working with Smarter Payouts very
													experienced team I must It was great working with
													Smarter Payouts
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
						</Slider>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
