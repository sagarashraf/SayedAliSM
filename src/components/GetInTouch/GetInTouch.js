import React from "react";
import { Button, Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faEnvelope,
	faMessage,
	faPaperPlane,
	faPhone,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./GetInTouch.css";
import { CompanyDetail } from "./CompanyDetail/CompanyDetail";

/**
 * @author
 * @function GetInTouch
 **/

const schema = yup.object().shape({
	Name: yup.string().required("Name is required"),
	Phone: yup.string(),
	Email: yup.string().email().required("Email is required"),
	Text: yup.string().required("Message is required"),
});

export const GetInTouch = (props) => {
	return (
		<Container fluid className='mt-5 mb-3 '>
			<Row>
				<Col sm={12}>
					<div className='text-center'>
						<h2 className='getIn-text-main'>Get-In Touch</h2>
						<p className='matched-offer-text'>
							Fill up the form and our Team will get back to you within 24
							hours.{" "}
						</p>
						{/* <Button variant='warning' className='getIn-touch-company-detail'>
							See Company Details
						</Button> */}
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={6} md={12}>
					<Formik
						validationSchema={schema}
						onSubmit={console.log}
						initialValues={{
							Name: "",
							Phone: "",
							Email: "",
							Text: "",
						}}>
						{({
							handleSubmit,
							handleChange,
							handleBlur,
							values,
							touched,
							isValid,
							errors,
						}) => (
							<Form noValidate onSubmit={handleSubmit}>
								<Row className='mb-3'>
									<Form.Group
										as={Col}
										md='12'
										className='mb-3'
										controlId='validationFormikUsername'>
										<Form.Label className='label-weight-getIn-Touch'>
											Name
										</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text
												className='getInTouch-user  '
												id='inputGroupPrepend'>
												<FontAwesomeIcon
													icon={faUser}
													size='lg'
													style={{ color: "lightgray" }}
												/>
											</InputGroup.Text>
											<Form.Control
												type='text'
												placeholder='Anthony'
												aria-describedby='inputGroupPrepend'
												name='Name'
												value={values.Name}
												onChange={handleChange}
												isInvalid={!!errors.Name}
												className='getInTouch-userName '
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.Name}
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
									<Form.Group
										as={Col}
										md='12'
										controlId='validationFormikUsername'>
										<Form.Label className='label-weight-getIn-Touch'>
											Phone
										</Form.Label>
										<InputGroup>
											<InputGroup.Text
												className='getInTouch-user  '
												id='inputGroupPrepend'>
												<FontAwesomeIcon
													icon={faPhone}
													size='lg'
													style={{ color: "lightgray" }}
												/>
											</InputGroup.Text>
											<Form.Control
												type='text'
												placeholder='+943*********'
												aria-describedby='inputGroupPrepend'
												name='Phone'
												value={values.Phone}
												onChange={handleChange}
												isInvalid={!!errors.Phone}
												className='getInTouch-userName '
											/>
										</InputGroup>
									</Form.Group>
								</Row>
								<Row className='mb-3'>
									<Form.Group
										as={Col}
										md='12'
										className='mb-3'
										controlId='validationFormikUsername'>
										<Form.Label className='label-weight-getIn-Touch'>
											Email
										</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text
												className='getInTouch-user  '
												id='inputGroupPrepend'>
												<FontAwesomeIcon
													icon={faEnvelope}
													size='lg'
													style={{ color: "lightgray" }}
												/>
											</InputGroup.Text>
											<Form.Control
												type='text'
												placeholder='Abc@example.com'
												aria-describedby='inputGroupPrepend'
												name='Email'
												value={values.Email}
												onChange={handleChange}
												isInvalid={touched.Email && !!errors.Email}
												onBlur={handleBlur}
												className='getInTouch-userName '
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.Email}
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
									<Form.Group
										as={Col}
										md='12'
										controlId='validationFormikUsername'>
										<Form.Label className='label-weight-getIn-Touch'>
											Message
										</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text
												className='getInTouch-user  '
												id='inputGroupPrepend'>
												<FontAwesomeIcon
													icon={faComment}
													size='lg'
													style={{ color: "lightgray" }}
												/>
											</InputGroup.Text>
											<Form.Control
												as='textarea'
												rows={3}
												name='Text'
												value={values.Text}
												onChange={handleChange}
												isInvalid={touched.Text && !!errors.Text}
												onBlur={handleBlur}
												className='getInTouch-userName '
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.Text}
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
								</Row>

								<Row className='text-center mt-3'>
									<Col lg={12}>
										<Button type='submit' className='send-message-button'>
											{" "}
											<FontAwesomeIcon
												icon={faPaperPlane}
												size='lg'
												style={{ color: "lightgray", marginRight: "12px" }}
											/>
											<span className='ml-5'>Send Message</span>
										</Button>
									</Col>
								</Row>
							</Form>
						)}
					</Formik>
				</Col>
				<Col lg={6} md={12}>
					<CompanyDetail />
				</Col>
			</Row>{" "}
		</Container>
	);
};
