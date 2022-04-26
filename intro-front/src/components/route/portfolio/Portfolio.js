// React
import React, { useEffect, useState } from 'react'

// Components
import PortfolioCard from '../home/PortfolioCard'
import PortfolioListCard from './PortfolioListCard'
import NoPortfolio from './NoPortfolio'
import Loading from '../../common/Loading'

// Library
import { Modal } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroller'

// Resource
import './portfolio.css'
import toast from 'react-hot-toast'

const Portfolio = ({isPortfolioOpen, setIsPortfolioOpen, setPortfolioNum}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [portfolioData, setPortfolioData] = useState(null)

    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    // Initial fetch
    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            fetch('/api/portfolio/list')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPortfolioData(data)
                })
                .catch((err) => {
                    return err
                })
        ])
            .finally(() => {
                setPage(page + 1)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        if(!hasMore) {
            toast.error('더 이상 포트폴리오가 없어요')
        }
    }, [hasMore])


    const openPortfolio = (index) => {
        setIsPortfolioOpen(true)
        setPortfolioNum(index)
    }
    const closeDetail = () => {
        setIsPortfolioOpen(false)
    }

    const fetchPortfolio = () => {
        fetch('/api/portfolio/list/' + page)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setPortfolioData([...portfolioData, ...data])
            })
            .catch((err) => {
                return err
            })
            .finally(() => {
                setPage(page + 1)
            })
        fetch('/api/portfolio/list/' + (page + 1))
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if(data == null || data.length == 0) {
                    setHasMore(false)
                }
            })
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

                    <InfiniteScroll
                        pageStart={0}
                        loadMore={fetchPortfolio}
                        hasMore={hasMore}
                        loader={<Loading/>}
                    >
                        {
                            portfolioData.map((data) => {
                                return(
                                    <PortfolioListCard
                                        portfolio={data}
                                        openPortfolio={openPortfolio}
                                    />                            
                                )
                            })
                        }
                    </InfiniteScroll>
            }
        </div>
    )
}

export default Portfolio