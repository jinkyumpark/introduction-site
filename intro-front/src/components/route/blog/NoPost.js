import React from 'react'
import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'

const NoContent = ({message}) => {
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
                    {message}
                </div>
            </div>
        </div>
    )
}

export default NoContent