import React from 'react'
import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'

const NoContent = ({message, size}) => {
    return (
        <div className={'container' + (size < 100) ? ' mt-1' : ' mt-5'}>
            <div className="row text-center">
                <ErrorIcon
                    size={size == null ? '150' : size}
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