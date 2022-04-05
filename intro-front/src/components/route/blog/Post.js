import React, { useState, useEffect } from 'react'
import ClassificationIcon from './ClassificationIcon'
import Loading from '../../common/Loading'

const Post = ({ blogNum, setIsBlogOpen }) => {
    const closeBlog = () => {
        setIsBlogOpen(false)
    }

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const post = {
        title: 'BLOG POST TITLE EXAMPLE',
        subtitle: 'BLOG POST SUBTITLE',
        classification: {
            name: "알고리즘",
            icon: 1
        },
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?
        `
    }

    return (
        isLoading ?
            <Loading /> :

            <div className='overflow-hidden'>
                <div className="row">
                    <div className="col-10 h1">
                        {post.title}
                    </div>
                    <div className="col-2">
                        <div className="btn btn-danger w-100" onClick={closeBlog}>닫기</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2">
                        <ClassificationIcon data={post.classification} />
                    </div>

                    <div className="col-10 text-muted h3 mt-3">
                        {post.subtitle}
                    </div>
                </div>

                <div className='h4 mt-5'>
                    {post.content}
                </div>
            </div>
    )
}

export default Post