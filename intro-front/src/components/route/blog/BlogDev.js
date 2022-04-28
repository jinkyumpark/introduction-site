import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ClassificationIcon from './ClassificationIcon'

import reactIcon from '../../../images/tech-icon/reactjs-icon.png'

// Components
import NoPost from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'
import toast from 'react-hot-toast'

const BlogDev = () => {
    const { num } = useParams();
    const [selectedMainCategory, setSelectedMainCategory] = useState(0)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)

    const [subCategoryList, setSubCategoryList] = useState(null)
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [blogPage, setBlogPage] = useState(0)
    const [totalPost, setTotalPost] = useState(150)

    // DUMMY DATA
    const dummyBlogList = [
        {
            key: 1332434,
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
            key: 134134,
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
            key: 31242341132412,
            num: 4,
            type: {
                img: 'http://picsum.photos/500/500//',
                name: '알고리즘'
            },
            title: '코딩 테스트에 알고리즘 이론 적용하기',
            content: '알고리즘을 막상 배워도 코딩 테스트에 어떻게 적용해야 할지 헷갈리는 경우가 많습니다',
            createdDate: '2022년 4월 3일'
        },
        {
            key: 31243214132412,
            num: 5,
            type: {
                img: 'http://picsum.photos/500/500///',
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
        },
    ]
    const dummyFrontSubCategory = [
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
            name: "Bootstrap",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31451231435,
            name: "SwiftUI",
            icon: 'http://picsum.photos/400/400',
        }
    ]
    const dummyBackSubCategory = [
        {
            key: 184129,
            name: "Spring",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31412341,
            name: "Database(SQL)",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 5532513,
            name: "Node.js(Express)",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31451435,
            name: "Django/Flask",
            icon: 'http://picsum.photos/400/400',
        }
    ]
    const dummyDevopsSubCategory = [
        {
            key: 184129,
            name: "Git",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31412341,
            name: "Docker",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 5532513,
            name: "IDE",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31451435,
            name: "Cloud",
            icon: 'http://picsum.photos/400/400',
        },
        {
            key: 31432451435,
            name: "Testing",
            icon: 'http://picsum.photos/400/400',
        }
    ]
    // DUMMY DATA

    const mainCategory = [
        {
            key: 13471923,
            name: 'Front',
            icon: 1
        },
        {
            key: 2134523455,
            name: 'Back',
            icon: 2
        },
        {
            key: 1451345,
            name: 'DevOps',
            icon: 3
        }
    ]

    useEffect(() => {
        setPosts(dummyBlogList)
    }, [])

    useEffect(() => {
        // Fetch blogData by page

    }, [selectedMainCategory, selectedSubCategory])

    useEffect(() => {
        // Fetch subCategory by selectedMainCategory
        if(selectedMainCategory == 0) {
            setSubCategoryList(null)
        } else if(selectedMainCategory == 1) {
            // fetch front
            setSubCategoryList(dummyFrontSubCategory)
        } else if(selectedMainCategory == 2) {
            // fetch back
            setSubCategoryList(dummyBackSubCategory)
        } else if(selectedMainCategory == 3) {
            // fetch devops
            setSubCategoryList(dummyDevopsSubCategory)
        }

    }, [selectedMainCategory])

    return (
        <div>
            <div className="h1">개발실무</div>

            <div className="row">
                {
                    mainCategory.map((category) => {
                        return (
                            <div className="col-4" onClick={() => {
                                if(selectedMainCategory != category.icon) {
                                    setSelectedMainCategory(category.icon)
                                } else {
                                    setSelectedMainCategory(0)
                                }
                            }}
                            >                                    
                                <ClassificationIcon
                                    data={category}
                                    isDev={true}
                                    isActive={(selectedMainCategory == category.icon)}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    selectedMainCategory != 0 ?
                    subCategoryList != null ?
                    subCategoryList.map((data) => {
                        return (
                            <div className="col-6 col-md-3">
                                <ClassificationIcon
                                    data={data}
                                />
                            </div>
                        )
                    })
                    :
                    <></>
                    :
                    <></>
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
                                                <Link to={'/blog/dev/' + post.num} className='text-decoration-none'>
                                                    <PostCard post={post}/>
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


export default BlogDev