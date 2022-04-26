import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import Profile from './Profile'
import PortfolioCard from './PortfolioCard'
import PostCard from '../blog/PostCard'
import MoreButton from '../../common/MoreButton'
import Error from '../../common/Error'
import Loading from '../../common/Loading'

// Resources
import './homeStyle.css'

const Home = ({ setIsBlogOpen, setBlogNum, setIsPortfolioOpen, setSelectedPortfolioNum }) => {
    const [isLoading, setIsLoading] = useState(false)

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
            <div className='container'>
                <Profile 
                    profile={profileData}
                />

                <div className='mb-5'>
                    <div className="h1 mb-3">포트폴리오 </div>

                    <div className="row">
                        {
                            portfolioData == null ?
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

                    <Link to="/portfolio">
                        <MoreButton />
                    </Link>
                </div>

                <div className="mb-5">
                    <div className="h1 mb-3">CS 이론 공부</div>

                    {
                        csBlogData == null ?
                        <Error/>
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
                    <Link to="/blog/cs">
                        <MoreButton />
                    </Link>
                </div>

                <div className="mb-5">
                    <div className="h1 mb-3">개발 실무 공부</div>

                        {
                            devBlogData == null ?
                            <Error/>
                            :
                            devBlogData.map((post) => {
                                return (
                                    <Link to={'/blog/dev/' + post.num } className='text-decoration-none'>
                                        <PostCard post={post}/>
                                    </Link>
                                )
                            })
                        }

                    <Link to="/blog/dev">
                        <MoreButton />
                    </Link>
                </div>

            </div>
        }
        </>
    )
}

export default Home