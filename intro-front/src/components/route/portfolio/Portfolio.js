import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

import PortfolioCard from '../home/PortfolioCard'
import PortfolioListCard from './PortfolioListCard'
import NoPortfolio from './NoPortfolio'

import './portfolio.css'

const Portfolio = ({isPortfolioOpen, setIsPortfolioOpen, setPortfolioNum}) => {

    const openPortfolio = (index) => {
        setIsPortfolioOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsPortfolioOpen(false)
    }

    const portfolioData = [
        {
            key: 0,
            num: 0,
            title: 'TITLE 1',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 3         
        },
        {
            key: 1,
            num: 1,
            title: 'TITLE 2',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 1         
        },
        {
            key: 2,
            num: 2,
            title: 'TITLE 3',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 2         
        },
        {
            key: 3,
            num: 3,
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

export default Portfolio