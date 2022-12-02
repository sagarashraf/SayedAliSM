import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GrBarChart } from "react-icons/gr";
import { PieChartConfig } from "./Charts/PieChartConfig";

import { SignleBarChart } from "./SignleBarChart";

import { useState } from "react";

import "./Overview.css";
import { HorizontalChart } from "./Charts/HorizontalChart";
import { MultibarChart } from "./Charts/MultibarChart";
/**
 * @author
 * @function OverView
 **/

export const OverView = (props) => {
	return (
		<Container>
			<Row className='mb-2'>
				<Col>
					<GrBarChart style={{ fontSize: "24px" }} />
					<div className='fw-bold h5'>Overview</div>
				</Col>
			</Row>
			<Row className='mb-3'>
				<Col lg={3} md={3} sm={6}>
					<Card className=' claims-card-count'>
						<Card.Body className='py-1'>
							<h6 className='mb-1'>Total Number of claims</h6>
							<h5 className='mb-1'>185</h5>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} md={3} sm={6}>
					<Card className=' claims-card-amount'>
						<Card.Body className='py-1'>
							<h6 className='mb-1'>Claim Amount</h6>
							<h5 className='mb-1'>800,787.44</h5>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} md={3} sm={6}>
					<Card className=' claims-card-withhold'>
						<Card.Body className='py-1'>
							<h6 className='mb-1'>Adj / Withhold</h6>
							<h5 className='mb-1'>52,189.09</h5>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} md={3} sm={6}>
					<Card className=' claims-card-netAmount'>
						<Card.Body className='py-1'>
							<h6 className='mb-1'>Net Amount</h6>
							<h5 className='mb-1'>759,248.85</h5>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={8}>
					<Row>
						<Col lg='6' md='6' sm='12' className='mb-3'>
							<Card className='text-center'>
								<Card.Header>
									<h6>Number of Claims</h6>
								</Card.Header>
								<Card.Body style={{ height: "12rem" }} className='py-1 px-1'>
									{" "}
									<SignleBarChart />
								</Card.Body>
							</Card>
						</Col>
						<Col lg='6' md='6' sm='12' className='mb-3'>
							<Card className='text-center'>
								<Card.Header>
									<h6>Claim Amount/ Adj (WithHold)</h6>
								</Card.Header>
								<Card.Body style={{ height: "12rem" }} className='py-1 px-1'>
									<HorizontalChart />
								</Card.Body>
							</Card>
						</Col>

						<Col lg={12}>
							<Card className='text-center'>
								<Card.Header>
									<h6>Overall Comparision of the parameters</h6>
								</Card.Header>
								<Card.Body className='py-1 px-1'>
									{" "}
									<MultibarChart />
								</Card.Body>

								<Card.Footer className='text-muted'>2 days ago</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col lg='4' md='6' sm='12'>
					<Card className='text-center h-100'>
						<Card.Header>
							<h6>Net Amount</h6>
						</Card.Header>
						<Card.Body className='py-1 px-1 pt-5'>
							{" "}
							<PieChartConfig />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
