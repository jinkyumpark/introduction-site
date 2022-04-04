import React from 'react'
import profile from '../../images/profileImg.jpg'

// Icons
import { MdSchool as SchoolIcon, MdEmail as EmailIcon } from 'react-icons/md'
import { BsHouseDoorFill as HouseIcon, BsFillTelephoneFill as PhoneIcon } from 'react-icons/bs'
import { FaSchool as SchoolIcon2 } from 'react-icons/fa'

// Components
import LanguageTable from './resume/LanguageTable'
import ActivityTable from './resume/ActivityTable'
import TechCard from './resume/TechCard'
import InterviewCard from './resume/InterviewCard'

const Resume = () => {
    const techData = [
        {
            name: 'React',
            img: '',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        }
    ]

    return (
        <div className='container mt-5 mb-5'>

            <div className="card mb-5">
                <div className="row w-100">

                    <div className="col-12 col-md-2 text-center ms-2 me-2">
                        <img className="card-img rounded-circle p-2" src={profile} alt="jinkyumpark's profile image" />
                    </div>

                    <div className="col-10 col-sm-7 ms-3 ms-md-0">
                        <div className="row mt-3">
                            <div className="h2">박진겸 <span className="h4 text-muted">Jinkyum Park</span></div>

                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className="h5">
                                        <SchoolIcon className='me-2' />
                                        뉴욕주립대 수학과
                                    </div>
                                    <div className="h5">
                                        <SchoolIcon2 className='me-2' />
                                        국비지원 백엔드 수료
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="h5">
                                        <HouseIcon className='me-2' />
                                        서울시 영등포구
                                    </div>
                                    <div className="h5">
                                        <PhoneIcon className='me-2' />
                                        010-4539-8503
                                    </div>
                                    <div className="h5">
                                        <EmailIcon className='me-2' />
                                        jinpark1025@gmail.com
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="h2">외국어</div>
                    <LanguageTable />
                </div>

                <div className="col-12 col-md-6">
                    <div className="h2">대외활동</div>
                    <ActivityTable />
                </div>

            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-8 col-lg-9 col-7">
                            <div className="h2">보유기술</div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-5">
                            <button className="btn btn-primary w-100" type='button'
                                data-toggle='collapse' data-target='#technicDescription'
                                aria-expanded='false' aria-controls='technicDescription'>기술이 있다의 기준은?</button>
                        </div>
                    </div>

                    <div className="collapse" id="technicDescription">
                        <div className="card card-body">
                            <div className="card-header">
                                저는 단순히 가볍게 다뤄 봤다고 이 기술을 알고 있다고 생각하지 않습니다. 무조건 프로젝트에서 사용한 적이 있고, 이해도에 따라 분류했습니다.
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>

                    {
                        techData.map((data) => {
                            return (
                                <TechCard
                                    tech={data}
                                />
                            )
                        })
                    }

                </div>

            </div>

            <div className="row mt-5">
                <div className="h2">자기소개서</div>
                <div className="col">

                </div>
            </div>

            <InterviewCard />

            <div className="row mt-5">
                <div className="h2">포트폴리오</div>
            </div>

            <div className="row mt-5">
                <div className="h2">그 밖에 궁금하신게 있으신가요?</div>
            </div>

        </div>
    )
}

export default Resume