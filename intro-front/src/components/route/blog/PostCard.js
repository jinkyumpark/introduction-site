import React from 'react'
import fetchUrl from '../../common/fetchvar'

const PostCard = ({ post }) => {
    const { num, category, title, content, createdDate } = post

    return (
        <div className="card mb-4 homeCard text-dark">
            <div className="row justify-content-center justify-content-sm-start no-gutters">

                <div className="col-6 col-sm-3 col-md-2 text-center ms-2 me-2 mt-3">
                    <img className="card-img rounded-circle p-2" src={fetchUrl + '/images/' + category.img} alt="LOGO" />
                    <div className="h5 text-center">{category.name}</div>
                </div>

                <div className="col-9 col-sm-8 mb-3">
                    <div className="row mt-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <div className="text-muted">{
                            createdDate
                                .substring(2, createdDate.indexOf('T'))
                                .replace('-', '년 ')
                                .replace('-', '월 ')
                                .concat('일')    
                        }</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCard