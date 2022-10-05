import React from "react";
import { Button, Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

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
		<Container>
			<Row>
				<Col sm={12}>
					<div className=''>
						<h2 className='matched-offer-tag'>Matched offers</h2>
						<p className='matched-offer-text'>Compare offers in minutes</p>
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
										controlId='validationFormikUsername'>
										<Form.Label>Name</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text id='inputGroupPrepend'>
												@
											</InputGroup.Text>
											<Form.Control
												type='text'
												placeholder='Anthony'
												aria-describedby='inputGroupPrepend'
												name='Name'
												value={values.Name}
												onChange={handleChange}
												isInvalid={!!errors.Name}
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
										<Form.Label>Phone</Form.Label>
										<InputGroup>
											<InputGroup.Text id='inputGroupPrepend'>
												@
											</InputGroup.Text>
											<Form.Control
												type='text'
												placeholder='Anthony'
												aria-describedby='inputGroupPrepend'
												name='Phone'
												value={values.Phone}
												onChange={handleChange}
												isInvalid={!!errors.Phone}
											/>
										</InputGroup>
									</Form.Group>
								</Row>
								<Row className='mb-3'>
									<Form.Group
										as={Col}
										md='12'
										controlId='validationFormikUsername'>
										<Form.Label>Email</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text id='inputGroupPrepend'>
												@
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
										<Form.Label>Message</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text id='inputGroupPrepend'>
												@
											</InputGroup.Text>
											<Form.Control
												as='textarea'
												rows={3}
												name='Text'
												value={values.Text}
												onChange={handleChange}
												isInvalid={touched.Text && !!errors.Text}
												onBlur={handleBlur}
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.Text}
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
								</Row>

								<Button type='submit'>Submit form</Button>
							</Form>
						)}
					</Formik>
				</Col>
				<Col lg={6} md={12}></Col>
			</Row>{" "}
		</Container>
	);
};
