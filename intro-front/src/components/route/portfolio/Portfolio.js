// React
import React, { useEffect, useState } from 'react'

// Components
import PortfolioCard from '../home/PortfolioCard'
import PortfolioListCard from './PortfolioListCard'
import NoPortfolio from './NoPortfolio'
import Loading from '../../common/Loading'

// Library
import { Modal } from 'react-bootstrap'

// Resource
import './portfolio.css'

const Portfolio = ({isPortfolioOpen, setIsPortfolioOpen, setPortfolioNum}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [portfolioData, setPortfolioData] = useState(null)

    // Initial fetch
    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            fetch('/api/portfolio/list')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setPortfolioData(data)
                })
                .catch((err) => {
                    return err
                })
        ])
            .finally(() => {
                setIsLoading(false)
            })
    }, [])


    const openPortfolio = (index) => {
        setIsPortfolioOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsPortfolioOpen(false)
    }

    return (
        <div>
            <div className="h1">포트폴리오</div>

            {
                isLoading ?
                <Loading/>
                :
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