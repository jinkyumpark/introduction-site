import React from 'react'
import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'

const NoPortfolio = () => {
    return(
        <div className='mt-5 text-center'>
            <div className="row">
                <ErrorIcon className='mb-3 text-danger' size='150'/>
            </div>
            <div className="row">
                <div className="h2 text-center w-100">
                    죄송해요 아직 포트폴리오가 없거나 로딩에 오류가 났어요.
                </div>
            </div>
        </div>
    )
}

export default NoPortfolio