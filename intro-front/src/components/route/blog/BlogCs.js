import React, { useState, useEffect } from 'react'
import ClassificationIcon from './ClassificationIcon'
import { Link, useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';

// Components
import NoContent from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'

import fetchUrl from '../../common/fetchvar';

const BlogCs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [blogPage, setBlogPage] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(0)
    
    const { num } = useParams();
    const [totalPost, setTotalPost] = useState(10)
    
    // DUMMY DATA
    const dummyClassificationData = [
        {
            key: 12,
            name: "알고리즘",
            icon: 'algo-icon.png'
        },
        {
            key: 12,
            name: "데이터구조",
            icon: 'datastructure-icon.png'
        },
        {
            key: 12,
            name: "네트워크",
            icon: 'network-icon.png'
        },
        {
            key: 12,
            name: "데이터베이스",
            icon: 'db-icon.png'
        },
        {
            key: 12,
            name: "컴퓨테이션 이론",
            icon: 'computation-icon.png'
        },
        {
            key: 12,
            name: "운영체제",
            icon: 'os-icon.png'
        }
    ]
    // DUMMY DATA

    const [classificationData, setClassificationData] = useState(dummyClassificationData)
    const [posts, setPosts] = useState(null)

    // Initial Fetch
    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            // Blog post (page 0)
            fetch(fetchUrl + '/api/blog/0')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPosts(data)
                })
                .catch((err) => {
                    return err
                }),
            // Classification
        ])
            .finally(() => {
                setIsLoading(false)
            })    
    }, [])

    useEffect(() => {
        // fetch filtered blog post here
    }, [selectedCategory])

    useEffect(() => {
        // fetch paging blog post here
        setIsLoading(true)

        fetch(fetchUrl + '/api/blog/' + blogPage)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setPosts(data)
            })
            .catch((err) => {
                return err
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [blogPage])

    return (
        <div>
            <div className="h1">컴퓨터 과학 이론</div>

            <div className="row">
                {
                    classificationData.map((data) => {
                        return (
                            <div className="col-4 col-lg-2"
                                    onClick={() => {
                                        if(data.name == selectedCategory) {
                                            setSelectedCategory(null)
                                        } else {
                                            setSelectedCategory(data.name)
                                        }
                                    }}
                            >
                                <ClassificationIcon
                                    data={data}
                                    isActive={data.name == selectedCategory}
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
                            <NoContent message='죄송해요, 아직 포스트가 없어요' /> :
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