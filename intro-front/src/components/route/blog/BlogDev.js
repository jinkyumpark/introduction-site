import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ClassificationIcon from './ClassificationIcon'

// Components
import NoContent from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'
import toast from 'react-hot-toast'
import Error from '../../common/Error'

import fetchUrl from '../../common/fetchvar'

const BlogDev = () => {
    const { num } = useParams();
    const [selectedMainCategory, setSelectedMainCategory] = useState(0)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [subCategoryList, setSubCategoryList] = useState(null)
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [blogPage, setBlogPage] = useState(0)
    const [totalPost, setTotalPost] = useState(0)


    // DUMMY DATA
    const mainCategory = [
        {
            key: 13471923,
            name: 'Front',
            icon: 'front-icon.png'
        },
        {
            key: 2134523455,
            name: 'Back',
            icon: 'linux-icon.png'
        },
        {
            key: 1451345,
            name: 'DevOps',
            icon: 'devops-icon.png'
        },
        {
            key: 12335443,
            name: '기타',
            icon: 'dot-icon.png'
        }
    ]
    const dummyFrontSubCategory = [
        {
            key: 184129,
            name: "HTML/CSS",
            icon: 'html-icon.png',
        },
        {
            key: 31412341,
            name: "JS",
            icon: 'js-icon.jpg',
        },
        {
            key: 5532513,
            name: "React",
            icon: 'reactjs-icon.png',
        },
        {
            key: 31451435,
            name: "Bootstrap",
            icon: 'bootstrap-icon.png',
        },
        {
            key: 31451231435,
            name: "SwiftUI",
            icon: 'swiftui-icon.png',
        }
    ]
    const dummyBackSubCategory = [
        {
            key: 184129,
            name: "Spring",
            icon: 'spring-icon.png',
        },
        {
            key: 31412341,
            name: "Database(SQL)",
            icon: 'plsql-icon.png',
        },
        {
            key: 5532513,
            name: "Node.js(Express)",
            icon: 'node-icon.jpeg',
        }
    ]
    const dummyDevopsSubCategory = [
        {
            key: 184129,
            name: "Git",
            icon: 'git-icon.png',
        },
        {
            key: 31412341,
            name: "Docker",
            icon: 'docker-icon.png',
        }
    ]
    const dummyEtcSubCategory = null
    // DUMMY DATA

    // Initial fetch
    useEffect(() => {
        Promise.all([
            fetch(fetchUrl + '/api/blog/1')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPosts(data)
                })
        ])
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    
    // Fetch blogData when page changes
    useEffect(() => {
        
    }, [selectedMainCategory, selectedSubCategory])

    // Fetch sub category when selectedMainCategory changes
    useEffect(() => {
        // Fetch subCategory by selectedMainCategory
        if(selectedMainCategory == null) {
            setSubCategoryList(null)
        } else if(selectedMainCategory == 'Front') {
            // fetch front
            setSubCategoryList(dummyFrontSubCategory)
        } else if(selectedMainCategory == 'Back') {
            // fetch back
            setSubCategoryList(dummyBackSubCategory)
        } else if(selectedMainCategory == 'DevOps') {
            // fetch devops
            setSubCategoryList(dummyDevopsSubCategory)
        } else {
            setSubCategoryList(dummyEtcSubCategory)
        }
    }, [selectedMainCategory])

    return (
        <div>
            <div className="h1">개발실무</div>

            <div className="row">
                {
                    mainCategory.map((category) => {
                        return (
                            <div className="col-12 col-md-6" onClick={() => {
                                if(selectedMainCategory != category.name) {
                                    setSelectedMainCategory(category.name)
                                } else {
                                    setSelectedMainCategory(null)
                                }
                            }}
                            >                                    
                                <ClassificationIcon
                                    data={category}
                                    isDev={true}
                                    isActive={(selectedMainCategory == category.name)}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    selectedMainCategory != null ?
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
                            <Error /> :
                                posts.length == 0 ?
                                    <NoContent message='죄송해요, 포스트가 아직 없어요'/> :
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
                                <Post num={num}/>
                }
            </div>
        </div>
    )
}


export default BlogDev