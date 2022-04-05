import React from 'react'
import { Link } from 'react-router-dom'
// Resources
import logo from '../../images/logo.png'
// Bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap'

const Topnav = () => {
    return (
        <Navbar bg="primary" fixed="top" expand="lg" className='navbar-dark pt-0 pb-0'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/" className='p-0'>
                        <img src={logo} alt="" className="d-inline align-top" style={{
                            width: '50px', height: '50px', color: 'white', filter: 'brightness(0) invert(1)'
                        }} />

                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarLink'></Navbar.Toggle>

                <Navbar.Collapse id="navbarLink">
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Nav.Link href='/resume' className='text-center'>이력서</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Nav.Link href='/portfolio' className='text-center'>포트폴리오</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Nav.Link href='/blog/cs' className='text-center'>이론공부</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Nav.Link href='/blog/dev' className='text-center'>개발공부</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container >
        </Navbar >
    )
}

export default Topnav