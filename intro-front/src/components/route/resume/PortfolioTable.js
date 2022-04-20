import React from 'react'
import { Link } from 'react-router-dom'

import PortfolioCard from '../home/PortfolioCard'


const PortfolioTable = ({portfolioData, setIsPortfolioOpen, setSelectedPortfolioNum}) => {

  return (
    <div className="row">
        <div className="h2 mb-3">포트폴리오</div>
    
        {
            portfolioData.map((portfolio) => {
                return(
                    <div className="col-12 col-md-6">
                        <PortfolioCard
                            portfolio={portfolio}
                            setIsPortfolioOpen={setIsPortfolioOpen}
                            setSelectedPortfolioNum={setSelectedPortfolioNum}
                        />
                    </div>
                )
            })
        }      

        <div className="col-12">
            <Link to='/portfolio'>
                <div className="btn btn-success w-100">
                    더 보기
                </div>
            </Link>
        </div>
    </div>
    )
}

export default PortfolioTable