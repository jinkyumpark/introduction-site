import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

import PortfolioCard from './home/PortfolioCard'
import NoPortfolio from './portfolio/NoPortfolio'

const Portfolio = ({setPage, isPortfolioOpen, setIsPortfolioOpen, setPortfolioNum}) => {
    useEffect(() => {
        setPage(2)
    }, [])

    const openPortfolio = (index) => {
        setIsPortfolioOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsPortfolioOpen(false)
    }

    const portfolioData = [
        {
            title: 'TITLE 1',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 3         
        },
        {
            title: 'TITLE 2',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 1         
        },
        {
            title: 'TITLE 3',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 2         
        },
        {
            title: 'TITLE 4',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 4         
        }
    ]

    return (
        <div>
            <div className="h1">포트폴리오</div>

            {
                portfolioData == null || portfolioData.length == 0 ? 
                    <NoPortfolio/> :

                    portfolioData.map((data) => {
                        return(
                            <PortfolioListCard
                                portfolio={data}
                                openPortfolio={openPortfolio}
                            />                            
                        )
                    })
            }
        </div>
    )
}

const PortfolioListCard = ({portfolio, openPortfolio}) => {
    return(
        <div className="card mt-3" >
        <div className="row" onClick={openPortfolio}>


            <div className="col-4">
                <img src={portfolio.img} alt='PORTFOLIO EX' className="" style={{ width: '300px', height: '200px' }} />
            </div>

            <div className="col-6 mt-2">
                <div className="h1">{portfolio.title}</div>

                <div className="h3 text-muted">{portfolio.description}</div>
            </div>

            <div className="col-2 align-self-center">
                <div className={"btn btn-outline-danger w-100 mt-2" + (portfolio.status == 0 ? ' active' : '')}>시작전</div>
                <div className={"btn btn-outline-primary w-100 mt-2" + (portfolio.status == 1 ? ' active' : '')}>진행중</div>
                <div className={"btn btn-outline-success w-100 mt-2" + (portfolio.status == 2 ? ' active' : '')}>완료</div>
                <div className={"btn btn-outline-warning w-100 mt-2" + (portfolio.status == 3 ? ' active' : '')}>유지보수</div>
            </div>
        </div>

    </div>
    )
}

export default Portfolio