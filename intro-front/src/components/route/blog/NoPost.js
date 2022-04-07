import React from 'react'
import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'

const NoPost = () => {
    return (
        <div className='container mt-5'>
            <div className="row text-center">
                <ErrorIcon
                    size='150'
                    className='text-danger'
                />
            </div>
            <div className="row mt-3">
                <div className="h2 text-center">
                    죄송해요, 포스트가 없어요!
                </div>
            </div>
        </div>
    )
}

export default NoPost