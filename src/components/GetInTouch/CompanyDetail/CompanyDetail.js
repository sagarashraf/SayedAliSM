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
import { ListGroup, Container, Row, Badge } from "react-bootstrap";
import "./CompanyDetail.css";

/**
 * @author
 * @function CompanyDetail
 **/

export const CompanyDetail = (props) => {
	return (
		<Container fluid>
			<Container className=' '>
				<div className='mb-4 text-center'>
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
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'>
								<div className='companydetail-text-style'>
									{" "}
									<FontAwesomeIcon
										className='companyDetail-icon'
										icon={faPhone}
									/>{" "}
									Dial Up now
								</div>
							</div>
							<div className='companydetail-text-style'>+932-43534-244</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'>
								<div className='companydetail-text-style'>
									{" "}
									<FontAwesomeIcon
										className='companyDetail-icon'
										icon={faEnvelope}
									/>{" "}
									Email
								</div>
							</div>
							<div className='companydetail-text-style'>
								Abc@smarterpayouts.com
							</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'>
								<div className='companydetail-text-style'>
									{" "}
									<FontAwesomeIcon
										style={{ marginRight: "10px" }}
										className='companyDetail-icon'
										icon={faMapMarker}
									/>{" "}
								</div>
							</div>
							<div className='companydetail-text-style'>
								3652 E Broward, Blvd , Fort Lauderdale , Florida , 33063
							</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'>
								<div className='companydetail-text-style'>
									{" "}
									<FontAwesomeIcon
										className='companyDetail-icon'
										icon={faShieldHalved}
									/>{" "}
									Privacy Policy
								</div>
							</div>
							<div className='companydetail-text-style'>
								<u>Visit here</u>
							</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex justify-content-between align-items-start'>
							{" "}
							<div className='ms-2 me-auto'>
								<div className='companydetail-text-style'>
									{" "}
									<FontAwesomeIcon
										className='companyDetail-icon'
										icon={faFilePen}
									/>{" "}
									Terms and Conditions
								</div>
							</div>
							<div className='companydetail-text-style'>
								<u>Visit here</u>
							</div>
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</Container>
	);
};
