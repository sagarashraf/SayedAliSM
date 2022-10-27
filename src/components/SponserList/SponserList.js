import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SponserList.css";
import { Card, Container } from "react-bootstrap";
/**
 * @author
 * @function SponserList
 **/

export const SponserList = (props) => {
	const settings = {
		dots: true,
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 2,
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
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container>
			<div className='text-center'>
				<h5>"As Seen On"</h5>
				<Slider {...settings}>
					<div>
						<img
							className='image-custom '
							src={require("../../assets/img/USA.png")}
							alt='USA'
							width={70}
							height={40}
						/>
					</div>
					<div>
						<img
							className='image-custom '
							src={require("../../assets/img/FOX.png")}
							alt='FOX'
							width={70}
							height={40}
						/>
					</div>

					<div>
						<img
							className='image-custom '
							src={require("../../assets/img/FOX.png")}
							alt='FOX'
							width={70}
							height={40}
						/>
					</div>
					<div>
						<img
							className='image-custom '
							src={require("../../assets/img/FOX.png")}
							alt='FOX'
							width={70}
							height={40}
						/>
					</div>
				</Slider>
			</div>
		</Container>
	);
};
