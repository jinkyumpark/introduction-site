import React, { useState, useEffect } from 'react'
import ClassificationIcon from './ClassificationIcon'
import { Link, useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';

// Components
import NoPost from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'

const BlogCs = () => {
    const { num } = useParams();
    const [totalPost, setTotalPost] = useState(100)
    const [blogPage, setBlogPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(0)

    const classificationData = [
        {
            name: "알고리즘",
            icon: 1
        },
        {
            name: "데이터구조",
            icon: 2
        },
        {
            name: "네트워크",
            icon: 3
        },
        {
            name: "데이터베이스",
            icon: 4
        },
        {
            name: "컴퓨테이션 이론",
            icon: 5
        },
        {
            name: "운영체제",
            icon: 6
        }
    ]

    // DUMMY DATA
    const dummyBlogData = [
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
        },
        {
            key: 342351241324142312,
            num: 6,
            type: {
                img: 'http://picsum.photos/500/500////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 31241324524142312,
            num: 7,
            type: {
                img: 'http://picsum.photos/500/500/////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 312413432524142312,
            num: 8,
            type: {
                img: 'http://picsum.photos/500/500//////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 31241543324142312,
            num: 9,
            type: {
                img: 'http://picsum.photos/500/500///////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 31241324123442312,
            num: 10,
            type: {
                img: 'http://picsum.photos/500/500////////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 312413413424123442312,
            num: 11,
            type: {
                img: 'http://picsum.photos/500/500/////////',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        }
    ]

    const dummySubCategory = [
        {
            key: 184129,
            name: "HTML/CSS",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31412341,
            name: "JS",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 5532513,
            name: "React",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31451435,
            name: "데이터베이스",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 41341234,
            name: "컴퓨테이션 이론",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 1341324,
            name: "운영체제",
            icon: 'http://picsum.photos/400/400',
        }
    ]
    // DUMMY DATA

    const [posts, setPosts] = useState(dummyBlogData)

    useEffect(() => {
        // fetch blog post here (page = 0)
    }, [])

    useEffect(() => {
        // fetch filtered blog post here
    }, [selectedCategory])

    useEffect(() => {
        // fetch paging blog post here
    }, [blogPage])

    return (
        <div>
            <div className="h1">컴퓨터 과학 이론</div>

            <div className="row">
                {
                    classificationData.map((data) => {
                        return (
                            <div className="col-4 col-md-2"
                                    onClick={() => {
                                        if(data.icon == selectedCategory) {
                                            setSelectedCategory(0)
                                        } else {
                                            setSelectedCategory(data.icon)
                                        }
                                    }}
                            >
                                <ClassificationIcon
                                    data={data}
                                    isCs={true}
                                    isActive={data.icon == selectedCategory}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className='mt-5'>
                {
                    isLoading ?
                        <Loading /> :
                        posts == null ?
                            <NoPost /> :
                                num == null ?
                                <>
                                {
                                    posts.map((post) => {
                                        return(
                                            <Link to={'/blog/cs/' + post.num} className='text-decoration-none'>
                                                <PostCard post={post} />
                                            </Link>
                                        )
                                    })
                                }

                                <div className="row mt-3 justify-content-center">
                                    <div className="col-12 align-self-center">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item" onClick={() => {
                                                if(0 < blogPage) {
                                                    setBlogPage(blogPage - 1)
                                                } else {
                                                    toast.error('더 이상 줄일 수 없어요. 처음으로 돌아왔어요')
                                                }
                                            }}><div class="page-link" href="#">{'<'}</div></li>
                                            {
                                                [ ...Array(Math.floor(totalPost / 10)) ].map((item, index) => {
                                                    return(
                                                        <li class={"page-item" + (blogPage == index ? ' active' : '')}
                                                            onClick={() => {
                                                                setBlogPage(index)
                                                            }}
                                                        
                                                        ><div class="page-link">{index + 1}</div></li>
                                                    )
                                                })
                                            }
                                            <li class="page-item" onClick={() => {
                                                if(blogPage < Math.floor(totalPost / 10) - 1) {
                                                    setBlogPage(blogPage + 1)
                                                } else {
                                                    toast.error('더 이상 포스트가 없어요')
                                                }
                                            }}><div class="page-link">{'>'}</div></li>
                                        </ul>
                                    </div>
                                </div>

                                </>
                                :
                                <Post/>
                }
            </div>
        </div>
    )
}


export default BlogCs