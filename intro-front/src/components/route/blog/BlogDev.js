import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ClassificationIcon from './ClassificationIcon'

import reactIcon from '../../../images/tech-icon/reactjs-icon.png'

// Components
import NoPost from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'

const BlogDev = () => {
    const { num } = useParams();
    const [selectedMainCategory, setSelectedMainCategory] = useState(0)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)

    const [subCategoryList, setSubCategoryList] = useState(null)
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    

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
            key: 3124132412,
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
            setSubCategoryList(dummySubCategory)
        } else if(selectedMainCategory == 2) {
            // fetch back

        } else if(selectedSubCategory == 3) {
            // fetch devops

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
                    <>ERROR</>
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
                                    posts.map((post) => {
                                        return(
                                            <Link to={'/blog/dev/' + post.num} className='text-decoration-none'>
                                                <PostCard post={post}/>
                                            </Link>
                                        )
                                    })
                                :
                                <Post/>
                }
            </div>
        </div>
    )
}


export default BlogDev