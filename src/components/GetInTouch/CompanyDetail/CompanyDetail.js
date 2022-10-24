import {
	faCalendarCheck,
	faCalendarPlus,
	faEnvelope,
	faFilePen,
	faMapLocation,
	faMapMarked,
	faMapMarker,
	faPhone,
	faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ListGroup, Container, Row, Badge, Col } from "react-bootstrap";
import "./CompanyDetail.css";

/**
 * @author
 * @function CompanyDetail
 **/

export const CompanyDetail = (props) => {
	return (
		<Container fluid>
			<Container fluid>
				<div className='mb-3 text-center'>
					<img
						width={60}
						height={120}
						alt='logo'
						src={require("../../../assets/img/logo-tower.png")}></img>
					<h3 className='way-to-us'>Ways to Reach us.</h3>
					<p>Feel free to get in touch with us</p>
				</div>
				<Row>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							{" "}
							<Row className='text-center'>
								<Col lg={12}>
									<div className='companydetail-text-style'>
										{" "}
										<FontAwesomeIcon
											className='companyDetail-icon'
											icon={faPhone}
										/>{" "}
										Dial Up now
									</div>
								</Col>
								<Col lg={12}>
									<div className='companydetail-text-style'>+932-43534-244</div>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row className='text-center'>
								<Col lg={12}>
									<div className='companydetail-text-style'>
										{" "}
										<FontAwesomeIcon
											className='companyDetail-icon'
											icon={faEnvelope}
										/>{" "}
										Email
									</div>
								</Col>
								<Col lg={12}>
									<div className='companydetail-text-style'>
										ArslanABC@smarterpayouts.com
									</div>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row className='text-center'>
								<Col lg={12}>
									<div className='companydetail-text-style'>
										{" "}
										<FontAwesomeIcon
											style={{ marginRight: "10px" }}
											className='companyDetail-icon'
											icon={faMapMarker}
										/>{" "}
										Visit Us
									</div>
								</Col>
								<Col lg={12}>
									<div className='companydetail-text-style px-2'>
										{"     "}76500E kotlakhpat, Model Town , S-block Lahore ,
										Pakistan
									</div>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row className='text-center'>
								<Col lg={6}>
									<div className='companydetail-text-style'>
										{" "}
										<FontAwesomeIcon
											className='companyDetail-icon'
											icon={faShieldHalved}
										/>{" "}
										Privacy Policy
										<div className='companydetail-text-style'>
											<u>Visit here</u>
										</div>
									</div>
								</Col>
								<Col lg={6}>
									<div className='companydetail-text-style'>
										{" "}
										<FontAwesomeIcon
											className='companyDetail-icon'
											icon={faFilePen}
										/>{" "}
										Terms and Conditions
										<div className='companydetail-text-style'>
											<u>Visit here</u>
										</div>
									</div>
								</Col>
							</Row>
							<div className='ms-2 me-auto'></div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'></div>
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</Container>
	);
};
