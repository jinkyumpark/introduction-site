import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// Components
import PortfolioCard from './home/PortfolioCard'
import Profile from './home/Profile'
import PostCard from './blog/PostCard'
import MoreButton from './home/MoreButton'
// Resources
import './home/homeStyle.css'

const Home = ({ setIsBlogOpen, setBlogNum, setPage }) => {
    useEffect(() => {
        setPage(0)
    }, [])

    const portfolioData = [
        {
            img: 'http://picsum.photos/400/200',
            title: 'Portfolio 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 1
        },
        {
            img: 'http://picsum.photos/400/200/',
            title: 'Portfolio 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            img: 'http://picsum.photos/400/200//',
            title: 'Portfolio 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            img: 'http://picsum.photos/400/200///',
            title: 'Portfolio 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 3
        }
    ]

    const csBlogData = [
        {
            num: 1,
            type: {
                img: 'http://picsum.photos/500/500',
                name: '알고리즘'
            },
            title: '정렬 알고리즘 총 정리',
            content: '알고리즘을 처음 배울 때 배우는게 바로 정렬 알고리즘입니다.',
            createdDate: '2022년 4월 3일'
        },
        {
            num: 2,
            type: {
                img: 'http://picsum.photos/500/500/',
                name: '알고리즘'
            },
            title: '탐색 알고리즘 총 정리',
            content: '알고리즘을 처음 배울 때 배우는게 바로 탐색 알고리즘입니다.',
            createdDate: '2022년 4월 3일'
        },
        {
            num: 3,
            type: {
                img: 'http://picsum.photos/500/500//',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        }
    ]

    const devBlogData = [
        {
            num: 1,
            type: {
                img: 'http://picsum.photos/500/500',
                name: '알고리즘'
            },
            title: '정렬 알고리즘 총 정리',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius veniam sunt laudantium dolores nulla ipsam dolor ratione error eaque dignissimos quaerat earum distinctio doloribus, libero minus saepe? Id, cumque facere.',
            createdDate: '2022년 4월 3일'
        },
        {
            num: 2,
            type: {
                img: 'http://picsum.photos/500/500/',
                name: '알고리즘'
            },
            title: '탐색 알고리즘 총 정리',
            content: '알고리즘을 처음 배울 때 배우는게 바로 탐색 알고리즘입니다.',
            createdDate: '2022년 4월 3일'
        },
        {
            num: 3,
            type: {
                img: 'http://picsum.photos/500/500//',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        }
    ]


    return (
        <div className='container'>
            <Profile />

            <div className='mb-5'>
                <div className="h1 mb-3">포트폴리오 </div>

                <div className="row">
                    {
                        portfolioData.map((data) => {
                            return (
                                <div className="col-12 col-md-6">
                                    <PortfolioCard portfolio={data} />
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
                    csBlogData.map((post) => {
                        return (
                            <div>
                                <PostCard post={post} setIsBlogOpen={setIsBlogOpen} setBlogNum={setBlogNum} />
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
                    devBlogData.map((post) => {
                        return (
                            <PostCard post={post} setIsBlogOpen={setIsBlogOpen} setBlogNum={setBlogNum} />
                        )
                    })
                }

                <Link to="/blog/dev">
                    <MoreButton />
                </Link>
            </div>

        </div>
    )
}

export default Home