import React from 'react'
import {BsArrowRight as DetailIcon} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import algoLogo from '../../../images/cs-algo.png'
import './homeStyle.css'

const TheoryCard = ({post}) => {
    const {num, type, title, content, createdDate} = post

  return (
    <div className="card mb-4 homeCard">
        <div className="row no-gutters">

            <div className="col-3 col-md-2 text-center ms-2 me-2">
                <img className="card-img rounded-circle p-2" src={type.img} alt="Algorithms"/>
                <div className="h5 text-center">{type.name}</div>
            </div>

            <div className="col-8 col-sm-7">
                <div className="row mt-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <div className="text-muted">{createdDate}</div>
                </div>

            </div>

            <div className="col-1 h1">
                <DetailIcon className='h-100 w-100 ms-md-5'/>
            </div>
        </div>


    </div>
  )
}

export default TheoryCard