import React, {useState} from 'react'
import {Button, Collapse} from 'react-bootstrap'

const AdminResume = () => {
    const resumeData = [
        {
            name: '프로필',
        },
        {
            name: '외국어',
        },
        {
            name: '대외활동',
        },
        {
            name: '보유기술'
        },
        {
            name: '자기소개서'
        },
        {
            name: '포트폴리오'
        }
    ]

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <div>


<div className='mt-5'>
            <div
                onClick={() => {
                    setIsProfileOpen(!isProfileOpen)
                }}
                aria-controls="profile"
                aria-expanded={isProfileOpen}
                className={'btn btn-outline-primary' + (isProfileOpen ? ' active' : '')}
            >
                프로필 편집
            </div>

            <Collapse in={isProfileOpen}>
                <div id="profile">
                    <Language/>
                </div>
            </Collapse>
        </div>

        <div className='mt-5'>
            <div
                onClick={() => {
                    setIsLanguageOpen(!isLanguageOpen)
                }}
                aria-controls="language"
                aria-expanded={isProfileOpen}
                className={'btn btn-outline-primary' + (isLanguageOpen ? ' active' : '')}
            >
                언어 편집
            </div>

            <Collapse in={isLanguageOpen}>
                <div id="language">
                    <Language/>
                </div>
            </Collapse>
        </div>


    </div>
  
  )
}

const Language = () => {
    return(
        <div className="card mt-5">
            <div className="card-header">언어</div>
            <div className="card-body">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">언어이름</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="">언어수준</label>
                        <div className="row">
                            <div className="col-6">
                                <select name="" id="" className="form-control">
                                    <option selected>회화</option>
                                    <option value="">상</option>
                                    <option value="">중</option>
                                    <option value="">하</option>
                                </select>
                            </div>
                            <div className="col-6">
                            <select name="" id="" className="form-control">
                                    <option selected>독해</option>
                                    <option value="">상</option>
                                    <option value="">중</option>
                                    <option value="">하</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="from-group mt-3">
                        <label htmlFor="">시험점수</label>
                        <input type="text" className="form-control" placeholder='공인시험점수'/>
                    </div>
                </form>
            </div>
        </div>
    )   
}


export default AdminResume