import React from 'react'
import { Link } from 'react-router-dom'
// Resources
import logo from '../../images/logo.png'
// Bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap'

const Topnav = ({page}) => {
    return (
        <Navbar bg="primary" fixed="top" expand="lg" className='navbar-dark pt-0 pb-0'>
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none'>
                        <Nav.Link href="/" className='p-0'>
                            <img src={logo} alt="" className="d-inline align-top" style={{
                                width: '50px', height: '50px', color: 'white', filter: 'brightness(0) invert(1)'
                            }} />
                        </Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarLink'></Navbar.Toggle>

                <Navbar.Collapse id="navbarLink">
                    <Nav className={'ms-auto ms-md-2 p-2 active'}>
                        <Link to='/resume' className='text-decoration-none'>
                            <Nav.Link href='/resume' className={'text-center' + (page == 1 && ' active')}>이력서</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Link to='/portfolio' className='text-decoration-none'>
                            <Nav.Link href='/portfolio' className={'text-center' + (page == 2 && ' active')}>포트폴리오</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Link to='/blog/cs' className='text-decoration-none'>
                            <Nav.Link href='/blog/cs' className={'text-center' + (page == 3 && ' active')}>이론공부</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className='ms-auto ms-md-2 p-2'>
                        <Link to='/blog/dev' className='text-decoration-none'>
                            <Nav.Link href='/blog/dev' className={'text-center' + (page == 4 && ' active')}>개발공부</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Container >
        </Navbar >
    )
}

export default Topnav