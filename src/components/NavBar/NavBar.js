import React from "react";
import {
	Container,
	Nav,
	Navbar,
	Offcanvas,
	NavDropdown,
	Form,
	Button,
} from "react-bootstrap";

/**
* @author
* @function NavBar

**/

export const NavBar = (props) => {
	return (
		<Navbar bg='light' expand={"xxl"} className='mb-3'>
			<Container fluid>
				<Navbar.Brand href='#'>
					<img
						alt='logo'
						fluid
						width={250}
						height={60}
						src={require("../../../src/assets/img/logo.png")}></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-"sm"-${"sm"}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-"sm"-${"sm"}`}
					aria-labelledby={`offcanvasNavbarLabel-"sm"-${"sm"}`}
					placement='start'>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-"sm"-${"sm"}`}>
							<img
								alt='logo'
								fluid
								width={250}
								height={60}
								src={require("../../../src/assets/img/logo.png")}></img>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className='w-75'>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link className='mb-4' href='#action1'>
								Home
							</Nav.Link>
							<Nav.Link className='mb-4' href='#action2'>
								Link
							</Nav.Link>
						</Nav>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link className='mb-4' href='#action1'>
								Home
							</Nav.Link>
							<Nav.Link className='mb-4' href='#action2'>
								Link
							</Nav.Link>
						</Nav>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link className='mb-4' href='#action1'>
								Home
							</Nav.Link>
							<Nav.Link className='mb-4' href='#action2'>
								Link
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
