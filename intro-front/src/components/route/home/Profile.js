import React from 'react'
import { Link } from 'react-router-dom'

import { BsArrowRight as DetailIcon } from 'react-icons/bs'
import Error from '../../common/Error'
import parse from 'html-react-parser'
import fetchUrl from '../../common/fetchvar'

const Profile = ({ profile }) => {
    return (
        <Link to="/resume" style={{ textDecoration: 'none' }}>
            {
                profile == null ?
                <Error/>
                :
                <div className="alert alert-primary" id="homeIntro">
                    <div className="row">

                        <div className="col-12 col-md-2 text-center mb-3">
                            <img src={fetchUrl + '/images/' + profile.img } alt="PROFILE IMG" style={{ width: '125px', height: '125px' }} className="rounded-circle me-3 me-md-5" />
                        </div>
                        <div className="col">
                            <p className='' style={{ lineHeight: '2' }}>
                                {parse(profile.content)}
                            </p>
                        </div>
                        <div className="col-1 d-none d-md-block">
                            <DetailIcon className='h2 h-100 w-sm-100' />
                        </div>

                    </div>
                </div>
            }
        </Link>
    )
}

export default Profile