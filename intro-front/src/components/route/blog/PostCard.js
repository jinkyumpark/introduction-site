import React from 'react'
import { BsArrowRight as DetailIcon } from 'react-icons/bs'
import algoLogo from '../../../images/cs-algo.png'

const PostCard = ({ post, setIsBlogOpen, setBlogNum }) => {
    const { num, type, title, content, createdDate } = post

    const openBlog = () => {
        setIsBlogOpen(true)
        setBlogNum(num)
        console.log(num)
    }


    return (
        <div className="card mb-4 homeCard" onClick={openBlog}>
            <div className="row no-gutters">

                <div className="col-3 col-md-2 text-center ms-2 me-2">
                    <img className="card-img rounded-circle p-2" src={type.img} alt="Algorithms" />
                    <div className="h5 text-center">{type.name}</div>
                </div>

                <div className="col-9 col-sm-8">
                    <div className="row mt-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <div className="text-muted">{createdDate}</div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default PostCard