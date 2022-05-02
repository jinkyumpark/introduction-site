import React, { useEffect, useState } from 'react'

// Components
import LanguageTable from './LanguageTable'
import ActivityTable from './ActivityTable'
import InterviewTable from './InterviewTable'
import PortfolioTable from './PortfolioTable'
import MoreInfoTable from './MoreInfoTable'
import TechTable from './TechTable'
import ProfileTable from './ProfileTable'
import Loading from '../../common/Loading'

// Bootstrap
import { Modal } from 'react-bootstrap'

import fetchUrl from '../../common/fetchvar'

const Resume = ({setIsPortfolioOpen, setSelectedPortfolioNum}) => {
    const [techPage, setTechPage] = useState(0)
    const [isPhoneRequestOpen, setIsPhoneRequestOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [profileData, setProfileData] = useState(null)
    const [techHeaderData, setTechHeaderData] = useState(null)
    const [techHeaderRowData, setTechHeaderRowData] = useState(null)
    const [techLength, setTechLength] = useState(0)
    const [techData, setTechData] = useState([])
    const [languageData, setLanguageData] = useState(null)
    const [activityData, setActivityData] = useState(null)
    const [introductionData, setIntroductionData] = useState(null)
    const [portfolioData, setPortfolioData] = useState(null)
    const [questionData, setQuestionData] = useState(null)

    const splitArray = (data, split) => {
        const result = 
            new Array(Math.ceil(data.length / split))
                .fill()
                .map(_ => data.splice(0, split))
        return result
    }                

    // Initial Fetch
    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            // Profile
            fetch(fetchUrl + '/api/resume/profile')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setProfileData(data)
                })
                .catch((err) => {
                    return err
                }),
    
            // Language
            fetch(fetchUrl + '/api/resume/language')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setLanguageData(data)
                })
                .catch((err) => {
                    return err
                }),
    
            // Activity
            fetch(fetchUrl + '/api/resume/activity')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setActivityData(data)
                })
                .catch((err) => {
                    return err
                }),
    
            // Tech
            fetch(fetchUrl + '/api/resume/tech/header')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setTechHeaderRowData(data)
                    setTechLength(data.techNum)

                    if(data.techList != null) {
                        const { innerWidth: width } = window;
                        if(width < 750) {
                            setTechHeaderData(splitArray(data.techList, 3))
                        } else {
                            setTechHeaderData(splitArray(data.techList, 4))
                        }
                    }
                })
                .catch((err) => {
                    return err
                }),
            fetch(fetchUrl + '/api/resume/tech/list')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setTechData(data)
                })
                .catch((err) => {
                    return err
                }),
    
            // Introduction
            fetch(fetchUrl + '/api/resume/introduction/normal')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setIntroductionData(data)
                })
                .catch((err) => {
                    return err
                }),
            fetch(fetchUrl + '/api/resume/introduction/interview')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setQuestionData(data)
                })
                .catch((err) => {
                    return err
                }),
    
            // Portfolio
            fetch(fetchUrl + '/api/portfolio/list?fetchNum=4')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPortfolioData(data)
                })
                .catch((err) => {
                    return err
                }),
        ])
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    // TechTable Page Change
    useEffect(() => {
        // fetch()
        if(techData != null) {
            fetch(fetchUrl + '/api/resume/tech/list/' + techPage)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setTechData(data)
                })
                .catch((err) => {
                    return err
                })
        }
    }, [techPage])

    return (
        <>
        {
            isLoading ?
            <Loading className='mt-5'/>
            :
            <div className='container mt-5 mb-5'>
                <ProfileTable
                    profileData={profileData}
                />
                
                <div className="row mt-5">

                    <div className="col-12 col-md-6">
                        <LanguageTable 
                            languageData={languageData}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <ActivityTable 
                            activityData={activityData}
                        />
                    </div>

                </div>

                <div className="mt-5">
                    <TechTable
                        techData={techData}
                        techHeaderData={techHeaderData}
                        techLength={techLength}
                        techPage={techPage}
                        setTechPage={setTechPage}
                    />
                </div>

                <div className="mt-5">
                    <InterviewTable 
                        questionData={questionData}
                        introductionData={introductionData}
                    />
                </div>

                <div className="mt-5">
                    <PortfolioTable
                        portfolioData={portfolioData}
                        setIsPortfolioOpen={setIsPortfolioOpen} 
                        setSelectedPortfolioNum={setSelectedPortfolioNum}
                    />  
                </div>

                <div className="mt-5">
                    <MoreInfoTable
                        setIsPhoneRequestOpen={setIsPhoneRequestOpen}
                        email={profileData == null ? 'jinpark1025@gmail.com' : profileData.email}
                    />
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
                                        <select className='form-control text-center'>
                                            <option>010</option>
                                            <option>02</option>
                                            <option>031</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" name="" id="" className='form-control text-center' maxLength={4}/>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" name="" id="" className='form-control text-center' maxLength={4}/>
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
        }
        </>
    )
                            
}

export default Resume