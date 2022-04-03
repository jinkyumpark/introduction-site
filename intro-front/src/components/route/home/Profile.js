import React from 'react'
import {BsArrowRight as DetailIcon} from 'react-icons/bs'
import profileImg from '../../../images/profileImg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = ({profile}) => {
  return (
        <div className="alert alert-primary" id="homeIntro">
            <div className="row">
                <img src={profileImg} alt="" style={{width: '100px'}} className="rounded-circle me-3 me-md-5"/>
                <div className="col">
                    <p>
                        안녕하세요! 기초가 탄탄한 백엔드 개발자 <b>박진겸</b>입니다.
                    </p>
                </div>
                <div className="col-1">
                    <DetailIcon className='h2 h-100 w-sm-100'/>
                </div>
            </div>
        </div>
  )
}

export default Profile