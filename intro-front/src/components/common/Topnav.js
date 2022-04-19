import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
// Resources
import logo from '../../images/logo.png'
// Bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap'

const Topnav = () => {

    const [page, setPage] = useState(0)

    const location = useLocation()

    useEffect(() => {
            const { pathname } = location

            if(pathname === '/') {
                setPage(0)
            } else if(pathname === '/resume') {
                setPage(1)
            } else if(pathname === '/portfolio') {
                setPage(2)
            } else if(pathname === '/blog/cs') {
                setPage(3)
            } else if(pathname === '/blog/dev') {
                setPage(4)
            } else {
                setPage(0)
            }

            console.log(pathname)
            console.log(page)

    }, [location])

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
                            <div className="nav-item">
                                <Link to='/resume' className={(page == 1 ? 'nav-link text-decoration-none text-center active' : 'nav-link text-decoration-none text-center')}>
                                    이력서
                                </Link>
                            </div>
                        </Nav>
                        <Nav className='ms-auto ms-md-2 p-2'>
                            <Link to='/portfolio' className={(page == 2 ? 'nav-link text-decoration-none text-center active' : 'nav-link text-decoration-none text-center')}>
                            포트폴리오
                            </Link>
                        </Nav>
                        <Nav className='ms-auto ms-md-2 p-2'>
                            <Link to='/blog/cs' className={(page == 3 ? 'nav-link text-decoration-none text-center active' : 'nav-link text-decoration-none text-center')}>
                            이론공부
                            </Link>
                        </Nav>
                        <Nav className='ms-auto ms-md-2 p-2'>
                            <Link to='/blog/dev' className={(page == 4 ? 'nav-link text-decoration-none text-center active' : 'nav-link text-decoration-none text-center')}>
                                개발공부
                            </Link>
                        </Nav>
                </Navbar.Collapse>

            </Container >
        </Navbar >
    )
}

export default Topnav