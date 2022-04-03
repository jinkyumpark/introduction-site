import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Resources
import logo from '../../images/logo.png'

const Topnav = () => {
  return (
    <nav className='navbar navbar-dark bg-primary fixed-top navbar-expand-lg'>
        <a className='navbar-brand ms-5' href='/'>
            <img src={logo} alt="" className="d-inline align-top" style={{width: '30px', height: '30px'}} />
        </a>
        <button class="navbar-toggler me-5" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/resume" className="nav-link">이력서</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/portfolio" className="nav-link">포트폴리오</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/blog/theory" className="nav-link">이론공부</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/blog/dev" className="nav-link">개발공부</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Topnav