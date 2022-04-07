import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

import PortfolioCard from './home/PortfolioCard'

import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'

const Portfolio = ({setPage}) => {
    useEffect(() => {
        setPage(2)
    }, [])

    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [portfolioNum, setPortfolioNum] = useState(null)
    const openDetail = (index) => {
        setIsDetailOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsDetailOpen(false)
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
                                openDetail={openDetail}
                            />                            
                        )
                    })
            }

            <Modal show={isDetailOpen} onHide={closeDetail}>
                <div className="card">
                    <div className="card-header">
                        <div className="h1">TITLE</div>
                    </div>
                    <div className="card-body">
                        <div className="card-content">
                            <div className="h5">DESCRIPTION</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const PortfolioListCard = ({portfolio, openDetail}) => {
    return(
        <div className="card mt-3" >
        <div className="row" onClick={openDetail}>


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

const NoPortfolio = () => {
    return(
        <div className='mt-5 text-center'>
            <div className="row">
                <ErrorIcon className='mb-3 text-danger' size='150'/>
            </div>
            <div className="row">
                <div className="h2 text-center w-100">
                    죄송해요 아직 포트폴리오가 없거나 로딩에 오류가 났어요.
                </div>
            </div>
        </div>
    )
}

export default Portfolio