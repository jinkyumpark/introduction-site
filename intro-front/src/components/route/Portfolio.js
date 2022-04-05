import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import PortfolioCard from './home/PortfolioCard'

const Portfolio = () => {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [portfolioNum, setPortfolioNum] = useState(null)
    const openDetail = (index) => {
        setIsDetailOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsDetailOpen(false)
    }

    return (
        <div>
            <div className="h1">포트폴리오</div>

            <div className="card mt-3" onClick={openDetail}>

                <div className="row">

                    <div className="col-4">
                        <img src="http://picsum.photos/400/400" alt="" className="" style={{ width: '300px', height: '200px' }} />
                    </div>

                    <div className="col-6 mt-2">
                        <div className="h1">TITLE</div>

                        <div className="h3 text-muted">DESCRIPTION</div>
                    </div>

                    <div className="col-2 text-center align-middle h-100">
                        <div className="btn btn-primary">지금 보러가기</div>
                    </div>

                </div>

            </div>

            <Modal show={isDetailOpen} onHide={closeDetail}>
                <div className="h1">TITLE</div>
                <div className="h1">DESCRIPTION</div>
            </Modal>
        </div>
    )
}

export default Portfolio