import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

// Components
import NoContent from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'
import ClassificationIcon from './ClassificationIcon'
import Error from '../../common/Error';

// Library
import { toast } from 'react-hot-toast';

// Resources
import fetchUrl from '../../common/fetchvar';

const BlogCs = () => {
    const { num } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [blogPage, setBlogPage] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(0)

    const [posts, setPosts] = useState(null)
    const [classificationData, setClassificationData] = useState(null)
    const [totalPost, setTotalPost] = useState(10)
    
    // Initial Fetch
    useEffect(() => {
        // Fetch category data
        fetch(fetchUrl + '/api/blog/category/0')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setClassificationData(data)
            })
            .catch((err) => {
                return err
            })
    }, [])

    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            // fetch filtered blog post
            fetch(fetchUrl + '/api/blog/filter/0/' + selectedCategory)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setPosts(data)
            })
            .catch((err) => {
                return err
            }),
            fetch(fetchUrl + '/api/blog/post/count/0/' + selectedCategory)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setTotalPost(data.postCount == null ? posts.length : data.postCount)
                })
                .catch((err) => {
                    return err
                })
        ])
        .finally(() => {
            setIsLoading(false)
        })
    }, [selectedCategory])

    useEffect(() => {
        // fetch paging blog post here
        setIsLoading(true)
        fetch(fetchUrl + '/api/blog/filter/0/' + selectedCategory + '/' + blogPage)
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
                    (classificationData == null || classificationData.length == 0) ?
                    <Error/>
                    :
                    classificationData.map((data) => {
                        return (
                            <Link to='/blog/cs' className="col-6 col-md-4 col-lg-2">
                                <div
                                        onClick={() => {
                                            if(data.num == selectedCategory) {
                                                setSelectedCategory(0)
                                            } else {
                                                setSelectedCategory(data.num)
                                            }
                                        }}
                                >
                                    <ClassificationIcon
                                        data={data}
                                        isActive={data.num == selectedCategory}
                                    />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <div className='mt-5'>
                {
                    isLoading ?
                        <Loading /> :
                        (posts == null || posts.length == 0) ?
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
                                                    toast.error('더 이상 포스트가 없어요')
                                                }
                                            }}><div class="page-link" href="#">{'<'}</div></li>
                                            {
                                                totalPost < 10 ?
                                                <li className="page-item active"><div className="page-link">1</div></li>
                                                :
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


export default BlogCs