import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import Profile from './Profile'
import PortfolioCard from './PortfolioCard'
import PostCard from '../blog/PostCard'
import MoreButton from '../../common/MoreButton'
import Error from '../../common/Error'
import Loading from '../../common/Loading'
import NoContent from '../blog/NoPost'

// Resources
import './homeStyle.css'

const Home = ({ setIsBlogOpen, setBlogNum, setIsPortfolioOpen, setSelectedPortfolioNum }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const [portfolioData, setPortfolioData] = useState(null)
    const [csBlogData, setCsBlogData] = useState(null)
    const [devBlogData, setDevBlogData] = useState(null)
    const [profileData, setProfileData] = useState(null)

    // Initial Fetch
    useEffect(() =>{
        setIsLoading(true)
        Promise.all([
            // Profile
            fetch('/api/home/profile')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setProfileData(data)
                })
                .catch((err) => {
                    return err
                }),

            // Portfolio
            fetch('/api/portfolio/list')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPortfolioData(data)
                })
                .catch((err) => {
                    return err
                }),

            // Blog
            fetch('/api/home/blog/cs')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setCsBlogData(data)
                })
                .catch((err) => {
                    return err
                }),
            fetch('/api/home/blog/dev')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setDevBlogData(data)
                })
                .catch((err) => {
                    return err
                })
        ])
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <>
        {
            isLoading ?
            <Loading/>
            :
            isError ? 
            <Error/>
            :
            <div className='container'>
                <Profile 
                    profile={profileData}
                />

                <div className='mb-5'>
                    <div className="h1 mb-3">포트폴리오 </div>

                    <div className="row">
                        {
                            (portfolioData == null || portfolioData.length == 0) ?
                            <Error/>
                            :
                            portfolioData.map((data) => {
                                return (
                                    <div className="col-12 col-md-6">
                                        <PortfolioCard 
                                            portfolio={data}
                                            setIsPortfolioOpen={setIsPortfolioOpen}
                                            setSelectedPortfolioNum={setSelectedPortfolioNum}
                                            isLinkActive={data.status == 2 || data.status == 3}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    {
                        (portfolioData == null || portfolioData.length < 4) ?
                        <></>
                        :
                        <Link to="/portfolio">
                            <MoreButton />
                        </Link>
                    }
                </div>

                <div className="mb-5">
                    <div className="h1 mb-3">CS 이론 공부</div>

                    {
                        csBlogData == null ?
                        <Error/>
                        :
                        csBlogData.length == 0 ?
                        <NoContent message={'죄송해요, 아직 게시물이 없어요'}/>
                        :
                        csBlogData.map((post) => {
                            return (
                                <div>
                                    <Link to={'/blog/cs/' + post.num } className='text-decoration-none'>
                                        <PostCard post={post}/>
                                    </Link>
                                </div>
                            )
                        })
                    }

                    {
                        (csBlogData == null || csBlogData.length < 3) ?
                        <></>
                        :
                        <Link to="/blog/cs">
                            <MoreButton />
                        </Link>
                    }
                </div>

                <div className="mb-5">
                    <div className="h1 mb-3">개발 실무 공부</div>

                        {
                            devBlogData == null ?
                            <Error/>
                            :
                            devBlogData.length == 0 ?
                            <NoContent message={'죄송해요, 아직 게시물이 없어요'}/>
                            :  
                            devBlogData.map((post) => {
                                return (
                                    <Link to={'/blog/dev/' + post.num } className='text-decoration-none'>
                                        <PostCard post={post}/>
                                    </Link>
                                )
                            })
                        }

                    {
                        (devBlogData == null || devBlogData.length < 3) ?
                        <></>
                        :
                        <Link to="/blog/dev">
                            <MoreButton />
                        </Link>
                    }
                </div>

            </div>
        }
        </>
    )
}

export default Home