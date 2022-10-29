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
import {
	ListGroup,
	Container,
	Row,
	Badge,
	Col,
	Form,
	InputGroup,
	Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CompanyDetail.css";

/**
 * @author
 * @function CompanyDetail
 **/

export const CompanyDetail = (props) => {
	return (
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
					<ListGroup.Item className='mb-1'>
						{" "}
						<Row>
							<Col lg={12}>
								<Card className='border-0'>
									<Card.Body className='py-0 '>
										<Row>
											<Col lg={1} xs={2}>
												<FontAwesomeIcon
													className='companyDetail-icon pt-3'
													icon={faPhone}
												/>{" "}
											</Col>
											<Col lg={10} xs={10}>
												<p className='mb-0 text-tag-detail'>Contact Us</p>
												<p className='mb-0 text-tag-detail-text'>
													+954-821-4862
												</p>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							{/* <Col lg={12}>
									<div className='companydetail-text-style'>+932-43534-244</div>
								</Col> */}
						</Row>
					</ListGroup.Item>
					<ListGroup.Item className='mb-1'>
						<Row>
							<Col lg={12}>
								<Card className='border-0'>
									<Card.Body className='py-0 '>
										<Row>
											<Col lg={1} xs={2}>
												<FontAwesomeIcon
													className='companyDetail-icon pt-3'
													icon={faEnvelope}
												/>{" "}
											</Col>
											<Col lg={10} xs={10}>
												<p className='mb-0 text-tag-detail'>Email</p>
												<p className='mb-0 text-tag-detail-text'>
													info@Smarterpayouts.com
												</p>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							{/* <Col lg={12}>
									<div className='companydetail-text-style'>
										ArslanABC@smarterpayouts.com
									</div>
								</Col> */}
						</Row>
					</ListGroup.Item>
					<ListGroup.Item className='mb-1'>
						<Row>
							<Col lg={12}>
								<Card className='border-0'>
									<Card.Body className='py-0 '>
										<Row>
											<Col lg={1} xs={2}>
												<FontAwesomeIcon
													className='companyDetail-icon pt-3'
													icon={faMapMarker}
												/>{" "}
											</Col>
											<Col lg={10} xs={10}>
												<p className='mb-0 text-tag-detail'>Visit Us</p>
												<p className='mb-0 text-tag-detail-text'>
													76500E kotlakhpat, Model Town , S-block Lahore ,
													Pakistan
												</p>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							{/* <Col lg={12}>
									<div className='companydetail-text-style px-2'>
										{"     "}76500E kotlakhpat, Model Town , S-block Lahore ,
										Pakistan
									</div>
								</Col> */}
						</Row>
					</ListGroup.Item>
					<ListGroup.Item className='mb-1'>
						<Row>
							<Col lg={12}>
								<Card className='border-0'>
									<Card.Body className='py-0 '>
										<Row>
											<Col lg={1} xs={2}>
												<FontAwesomeIcon
													className='companyDetail-icon pt-1'
													icon={faShieldHalved}
												/>{" "}
											</Col>
											<Col lg={10} xs={10}>
												<p className='mb-0 text-tag-detail'>
													<Link
														className='text-tag-detail'
														to={"/Privacy-Policy"}>
														{" "}
														Privacy Policy
													</Link>
												</p>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<div className='ms-2 me-auto'></div>
					</ListGroup.Item>
					<ListGroup.Item className='mb-1'>
						<Col lg={12}>
							<Card className='border-0'>
								<Card.Body className='py-0 '>
									<Row>
										<Col lg={1} xs={2}>
											<FontAwesomeIcon
												className='companyDetail-icon pt-1'
												icon={faFilePen}
											/>{" "}
										</Col>
										<Col lg={10} xs={10}>
											<p className='mb-0 text-tag-detail'>
												<Link
													className='text-tag-detail'
													to={"/Terms-Conditions"}>
													Terms and Conditions
												</Link>
											</p>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
					</ListGroup.Item>
				</ListGroup>
			</Row>
		</Container>
	);
};
