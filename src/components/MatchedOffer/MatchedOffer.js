import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./MatchedOffer.css";
import StarRatings from "react-star-ratings";
import { MATCHED_OFFER } from "../constants/AppConstant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @author
 * @function MatchedOffer
 **/

export const MatchedOffer = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		className: "center",
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
		<Container className='pb-5'>
			<hr />
			<Row>
				<Col sm={12}>
					<div className='text-center'>
						<h2 className='matched-offer-tag'>Matched offers</h2>
						<p className='matched-offer-text'>Compare offers in minutes</p>
					</div>
					<Slider {...settings}>
						<div>
							<Row className='matched-offers-row'>
								{MATCHED_OFFER.map((item, index) => {
									return (
										<Col key={index} lg={3} md={4} sm={6} xs={12}>
											<Card className='main-card' key={index + "offers"}>
												<Card.Body>
													<div className='matched-offer-first-row px-1 text-center'>
														<div className='w-50 text-center'>
															<h6 className=' comapny-payment-tag'>Company</h6>
															<img
																className='m-auto'
																alt='com'
																src={require("../../assets/img/company.png")}></img>
															<p className='company-name'>
																<b>{item.companyName}</b>
															</p>
															<p className='Reviews'>Reviews</p>
														</div>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Payment</h6>
															<p className='payment-value mb-0'>
																{`$ ${item.payment}`}/ Men
															</p>
															<StarRatings
																rating={item.reviewsCount}
																starRatedColor='gold'
																//changeRating={this.changeRating}
																numberOfStars={5}
																name='rating'
																starDimension='10px'
															/>
															<p className='star-count'>
																({`${item.reviewsCount}`})
															</p>
														</div>
													</div>
													<hr />
													<div className='min-max-row'>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Min Offer</p>
															<p className='min-max-value mb-2'>$75,525.55</p>
															<p className='min-max-phone mb-1'>
																(866)579-0592
															</p>
														</div>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Max Offer</p>
															<p className='min-max-value mb-2'>$95,525.55</p>
															<Button
																className='next-button '
																variant='warning'>
																Next{" "}
															</Button>
														</div>
													</div>
												</Card.Body>
											</Card>
										</Col>
									);
								})}
							</Row>
						</div>
						<div>
							<Row>
								{MATCHED_OFFER.map((item, index) => {
									return (
										<Col key={index} lg={3} md={4} sm={6} xs={12}>
											<Card className='main-card' key={index + "offers"}>
												<Card.Body>
													<div className='matched-offer-first-row px-1 text-center'>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Company</h6>
															<img
																alt='com'
																src={require("../../assets/img/company.png")}></img>
															<p className='company-name'>
																<b>{item.companyName}</b>
															</p>
															<p className='Reviews'>Reviews</p>
															<StarRatings
																rating={item.reviewsCount}
																starRatedColor='gold'
																//changeRating={this.changeRating}
																numberOfStars={5}
																name='rating'
																starDimension='10px'
															/>
															<p className='star-count'>
																({`${item.reviewsCount}.0`})
															</p>
														</div>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Payment</h6>
															<p className='payment-value'>
																{`$ ${item.payment}`}/ Men
															</p>
														</div>
													</div>
													<hr />
													<div className='min-max-row'>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Min Offer</p>
															<p className='min-max-value'>$75,525.55</p>
															<p className='min-max-phone'>(866)579-0592</p>
														</div>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Max Offer</p>
															<p className='min-max-value'>$95,525.55</p>
															<Button
																className='next-button '
																variant='warning'>
																Next{" "}
															</Button>
														</div>
													</div>
												</Card.Body>
											</Card>
										</Col>
									);
								})}
							</Row>
						</div>
						<div>
							<Row>
								{MATCHED_OFFER.map((item, index) => {
									return (
										<Col key={index} lg={3} md={4} sm={6} xs={12}>
											<Card className='main-card' key={index + "offers"}>
												<Card.Body>
													<div className='matched-offer-first-row px-1 text-center'>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Company</h6>
															<img
																alt='com'
																src={require("../../assets/img/company.png")}></img>
															<p className='company-name'>
																<b>{item.companyName}</b>
															</p>
															<p className='Reviews'>Reviews</p>
															<StarRatings
																rating={item.reviewsCount}
																starRatedColor='gold'
																//changeRating={this.changeRating}
																numberOfStars={5}
																name='rating'
																starDimension='10px'
															/>
															<p className='star-count'>
																({`${item.reviewsCount}.0`})
															</p>
														</div>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Payment</h6>
															<p className='payment-value'>
																{`$ ${item.payment}`}/ Men
															</p>
														</div>
													</div>
													<hr />
													<div className='min-max-row'>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Min Offer</p>
															<p className='min-max-value'>$75,525.55</p>
															<p className='min-max-phone'>(866)579-0592</p>
														</div>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Max Offer</p>
															<p className='min-max-value'>$95,525.55</p>
															<Button
																className='next-button '
																variant='warning'>
																Next{" "}
															</Button>
														</div>
													</div>
												</Card.Body>
											</Card>
										</Col>
									);
								})}
							</Row>
						</div>
						<div>
							<Row>
								{MATCHED_OFFER.map((item, index) => {
									return (
										<Col key={index} lg={3} md={4} sm={6} xs={12}>
											<Card className='main-card' key={index + "offers"}>
												<Card.Body>
													<div className='matched-offer-first-row px-1 text-center'>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Company</h6>
															<img
																alt='com'
																src={require("../../assets/img/company.png")}></img>
															<p className='company-name'>
																<b>{item.companyName}</b>
															</p>
															<p className='Reviews'>Reviews</p>
															<StarRatings
																rating={item.reviewsCount}
																starRatedColor='gold'
																//changeRating={this.changeRating}
																numberOfStars={5}
																name='rating'
																starDimension='10px'
															/>
															<p className='star-count'>
																({`${item.reviewsCount}.0`})
															</p>
														</div>
														<div className='w-50'>
															<h6 className=' comapny-payment-tag'>Payment</h6>
															<p className='payment-value'>
																{`$ ${item.payment}`}/ Men
															</p>
														</div>
													</div>
													<hr />
													<div className='min-max-row'>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Min Offer</p>
															<p className='min-max-value'>$75,525.55</p>
															<p className='min-max-phone'>(866)579-0592</p>
														</div>
														<div className='w-50 text-center'>
															<p className='min-max-tag'>Max Offer</p>
															<p className='min-max-value'>$95,525.55</p>
															<Button
																className='next-button '
																variant='warning'>
																Next{" "}
															</Button>
														</div>
													</div>
												</Card.Body>
											</Card>
										</Col>
									);
								})}
							</Row>
						</div>
					</Slider>
				</Col>
			</Row>
		</Container>
	);
};
