import React, { useEffect, useState } from 'react'
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

// Bootstrap
import { Collapse, Button, OverlayTrigger, Popover, Modal } from 'react-bootstrap'

const Resume = ({setPage}) => {

    const dummyTechData = [
        {
            name: 'React',
            img: 'reactjs-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        },
        {
            name: 'Spring Framework',
            img: 'spring-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        },
        {
            name: 'Oracle DB',
            img: 'oracledb-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        }
    ]

    const [techData, setTechData] = useState(dummyTechData)
    const fetchTechData = () => {
        const dummyFetchData = [
            {
                name: 'Docker',
                img: 'docker-icon.png',
                summary: {
                    sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum2: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum3: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음'
                }
            },
            {
                name: 'jQuery',
                img: 'jquery-icon.ico',
                summary: {
                    sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum2: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum3: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음'
                }
            },
            {
                name: 'Vim',
                img: 'vim-icon',
                summary: {
                    sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum2: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                    sum3: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음'
                }
            }
        ]
        setTechData([...techData, ...dummyFetchData])
    }

    const [isDesOpen, setIsDesOpen] = useState(false)
    const [isPhoneRequestOpen, setIsPhoneRequestOpen] = useState(false)

    return (
        <div className='container mt-5 mb-5'>

            <div className="card mb-5">
                <div className="row card-body">

                    <div className="col-12 col-md-2 text-center align-self-center">
                        <img className="card-img rounded-circle p-2" src={profile} alt="jinkyumpark's profile image" />
                    </div>

                    <div className="col-12 col-md-10">
                        <div className="row mt-3">
                            <div className="h2 text-center text-md-start mb-3">박진겸 <span className="h4 text-muted">Jinkyum Park</span></div>

                            <div className='row'>
                                <div className='col-12 col-md-6 mb-4 mb-md-0'>
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
                        <div className="col-md-8 col-lg-9 col-5">
                            <div className="h2">보유기술</div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-7">

                            <Button
                                onClick={() => setIsDesOpen(!isDesOpen)}
                                aria-controls='techDes'
                                aria-expanded={isDesOpen}
                                className='btn-primary w-100'
                            >기술이 있다의 기준은?</Button>

                        </div>
                    </div>

                    <Collapse in={isDesOpen} className='mt-3 h6 text-muted'>
                        <div className="card card-body" id='techDes' style={{ lineHeight: '2rem' }}>
                            저는 단순히 가볍게 몇 번 다뤄 봤다고 이 기술을 보유하고 있다고 생각하지 않습니다.
                            무조건 프로젝트에서 사용한 적이 있고, 서툴어도 검색해 가면서 현업에서 바로
                            사용할 수 있다고 생각하는 기술만 포함했습니다.
                        </div>
                    </Collapse>

                    {
                        techData.map((data) => {
                            return (
                                <TechCard
                                    tech={data}
                                />
                            )
                        })
                    }

                    <div className="row">
                        <div className="btn btn-success mt-3" onClick={() => fetchTechData}>더 보기</div>
                    </div>

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
                <div className="h2">더 궁금한게 있으신가요?</div>
                    <div className="row text-muted">
                        <div className="h5 p-3">
                            만약 더 궁금하신게 있거나, 제게 연락해야 한다면 아래 연락처를 이용해 주세요!
                        </div>
                    </div>

                    <div className="row text-muted">
                        <div className="h5 p-3">
                            이메일로 연락하셔도 보통 하루 내에는 답장 드릴 수 있지만, 정말 급하시다면 핸드폰 번호를 요청하실 수 있어요.
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-5 col-md-4 align-self-center">

                            <OverlayTrigger
                                key='top'
                                placement='top'
                                overlay={
                                    <Popover>
                                        <Popover.Body>
                                            jinpark1025@gmail.com
                                        </Popover.Body>
                                    </Popover>
                                }
                                >
                                <button className='btn btn-primary w-100'>이메일로 연락하기</button>
                            </OverlayTrigger>

                        </div>

                        <div className="col-5 col-md-4 align self-center">
                            <button className="btn btn-primary w-100" onClick={() => {
                                setIsPhoneRequestOpen(true)
                            }}>
                                휴대폰 번호 요청하기
                            </button>
                        </div>
                    </div>

            </div>


            <Modal
                show={isPhoneRequestOpen}
                onHide={() => {
                    setIsPhoneRequestOpen(false)
                }}
            >
                <Modal.Header closeButton>
                    <div className="h2">
                        휴대폰 번호 요청하기
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">소속</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <small className="form-text text-muted">소속을 적어주세요(회사, 대학 등)</small>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="">이유</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <small className="form-text text-muted">제 휴대폰 번호가 필요한 이유를 간단히 적어주세요</small>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="">연락 받으실 휴대폰 번호</label>
                            <div className="row">
                                <div className="col-4">
                                    <input type="text" name="" id="" className='form-control' maxLength={3}/>
                                </div>
                                <div className="col-4">
                                    <input type="text" name="" id="" className='form-control' maxLength={4}/>
                                </div>
                                <div className="col-4">
                                    <input type="text" name="" id="" className='form-control' maxLength={4}/>
                                </div>
                            </div>
                            <small className="form-text text-muted">연락 받으실 휴대폰 번호를 적어 주세요</small>
                        </div>

                        <div className="row mt-3">
                            <div className="col-6">
                                <button type="submit" className='btn btn-primary w-100'>요청</button>
                            </div>
                            <div className="col-6">
                                <button type='reset' className='btn btn-danger w-100' onClick={() => {
                                    setIsPhoneRequestOpen(false)
                                }}>취소</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Resume