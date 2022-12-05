import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GrBarChart } from "react-icons/gr";
import { PieChartConfig } from "./Charts/PieChartConfig";
import { SignleBarChart } from "./SignleBarChart";
import { useState } from "react";
import "./Overview.css";
import { HorizontalChart } from "./Charts/HorizontalChart";
import { MultibarChart } from "./Charts/MultibarChart";
import { TotalClaims } from "./TotalClaims/TotalClaims";
import { CalimAmount } from "./CalimAmount/CalimAmount";
import { WithHolds } from "./CalimAmount/WithHolds/WithHolds";
import { NetAmount } from "./NetAmount/NetAmount";
import { SlicedCharts } from "../Charts/SlicedCharts/SlicedCharts";
import { HorizontalBar } from "../Charts/SlicedCharts/HorizontalBar/HorizontalBar";
import { ThreeDPieChart } from "../Charts/ThreeDPieChart/ThreeDPieChart";
import { MultiBarChart } from "../Charts/MultiBarChart/MultiBarChart";
/**
 * @author
 * @function OverView
 **/

export const OverView = (props) => {
	return (
		<Container fluid>
			<Row className='mb-2'>
				<Col>
					<GrBarChart style={{ fontSize: "23px" }} />
					<div className='fw-bold h5'>Overview</div>
				</Col>
			</Row>
			<Row className='mb-3'>
				<Col lg={3} md={3} sm={6}>
					<TotalClaims />
				</Col>
				<Col lg={3} md={3} sm={6}>
					<CalimAmount />
				</Col>
				<Col lg={3} md={3} sm={6}>
					<WithHolds />
				</Col>
				<Col lg={3} md={3} sm={6}>
					<NetAmount />
				</Col>
			</Row>
			<Row>
				<Col lg={8}>
					<Row>
						<Col lg='6' md='6' sm='12' className='mb-3 h-100'>
							<Card className='text-center '>
								<Card.Body className='py-1 px-1 mb-2'>
									<h6 className='mb-0'>Number of Claims</h6>
									<SlicedCharts />
								</Card.Body>
							</Card>
						</Col>
						<Col lg='6' md='6' sm='12' className='mb-3  h-100 '>
							<Card className='text-center '>
								<Card.Body className='py-2 px-1'>
									<h6 className='mb-0'>Claim Amount/ Adj (WithHold)</h6>
									<HorizontalBar />
								</Card.Body>
							</Card>
						</Col>

						<Col lg={12} className='mb-3  h-100 '>
							<Card className='text-center'>
								<Card.Body className='py-1 px-1'>
									<MultiBarChart />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col lg='4' md='6' sm='12' className='mb-3 '>
					<Card className='text-center '>
						<h6 className='mb-0 '>Net Amount</h6>

						<Card.Body className='py-1 px-1 '>
							<ThreeDPieChart />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
