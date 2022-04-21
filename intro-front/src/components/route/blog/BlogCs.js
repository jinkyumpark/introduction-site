import React, { useState, useEffect } from 'react'
import ClassificationIcon from './ClassificationIcon'
import { Link, useParams } from 'react-router-dom';

// Components
import NoPost from './NoPost'
import Loading from "../../common/Loading"
import PostCard from './PostCard'
import Post from './Post'

const BlogCs = () => {
    const { num } = useParams();

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

    const [posts, setPosts] = useState(csBlogData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        console.log(num)
    }, [])

    return (
        <div>
            <div className="h1">컴퓨터 과학 이론</div>

            <div className="row">
                {
                    classificationData.map((data) => {
                        return (
                            <div className="col-4 col-md-2">
                                <ClassificationIcon
                                    data={data}
                                    isCs={true}
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
                                posts.map((post) => {
                                    return(
                                        <Link to={'/blog/cs/' + post.num} className='text-decoration-none'>
                                            <PostCard post={post} />
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


export default BlogCs