import React from 'react'
import { BsArrowRight as DetailIcon } from 'react-icons/bs'
import profileImg from '../../../images/profileImg.jpg'
import { Link } from 'react-router-dom'

const Profile = ({ profile }) => {
    return (
        <Link to="/resume" style={{ textDecoration: 'none' }}>
            <div className="alert alert-primary" id="homeIntro">
                <div className="row">

                    <div className="col-12 col-md-2 text-center mb-3">
                        <img src={profileImg} alt="" style={{ width: '125px', height: '125px' }} className="rounded-circle me-3 me-md-5" />
                    </div>
                    <div className="col">
                        <p className='' style={{ lineHeight: '2' }}>
                            안녕하세요! 기초가 탄탄한 백엔드 개발자 <b>박진겸</b>입니다.
                            어렸을때 부터 문제 해결을 좋아해 수학과를 갔지만 컴퓨터 과학 수업을 듣고 컴퓨터 과학에 푹 빠졌습니다.
                            컴퓨터 과학은 이론도 흥미롭지만, 무엇보다 <b>세상에 긍정적인 영향을 줄 수 있는</b>게 너무 좋습니다. <br /><br />
                            저에 대해 더 알고 싶으시면 이곳에서 알아 보실 수 있어요!
                        </p>
                    </div>
                    <div className="col-1 d-none d-md-block">
                        <DetailIcon className='h2 h-100 w-sm-100' />
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Profile