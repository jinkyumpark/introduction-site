import React from 'react'
import Error from '../../common/Error'

import { MdSchool as SchoolIcon, MdEmail as EmailIcon } from 'react-icons/md'
import { BsHouseDoorFill as HouseIcon, BsFillTelephoneFill as PhoneIcon } from 'react-icons/bs'
import { FaSchool as SchoolIcon2 } from 'react-icons/fa'
import fetchUrl from '../../common/fetchvar'

const ProfileTable = ({profileData}) => {

  return (
    <div className="card">
        {
            profileData == null ?
            <Error/>
            :
            <div className="row card-body">
                
                <div className="col-12 col-md-2 text-center align-self-center">
                    <img className="card-img rounded-circle p-2" src={fetchUrl + '/images/' + profileData.profileImg} alt="jinkyumpark's profile image" />
                </div>

                <div className="col-12 col-md-10">
                    
                    <div className="row mt-3">
                        <div className="h2 text-center text-md-start mb-3">{profileData.koreanName} <span className="h4 text-muted">{profileData.englishName}</span></div>

                        <div className='row'>
                            <div className='col-12 col-md-6 mb-4 mb-md-0'>
                                <div className="h5">
                                    <SchoolIcon className='me-2' />
                                    {profileData.school}
                                </div>
                                <div className="h5">
                                    <SchoolIcon2 className='me-2' />
                                    {profileData.education}
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="h5">
                                    <HouseIcon className='me-2' />
                                    {profileData.address}
                                </div>
                                <div className="h5">
                                    <EmailIcon className='me-2' />
                                    {profileData.email}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        }

    </div>
)
}

export default ProfileTable