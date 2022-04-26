import React from 'react'

import {BiMessageAltError as ErrorIcon} from 'react-icons/bi'

const Error = () => {
  return (
    <div className='container text-center'>
      
      <ErrorIcon className='text-danger' style={{fontSize: '50px'}}/>

      <div className="row">
        <div className="h1">
          에러가 났어요
        </div>
      </div>

    </div>
  )
}

export default Error