import React, {useState} from 'react'
import {Button, Collapse} from 'react-bootstrap'

const AdminResume = () => {
    const resumeData = [
        {
            title: '프로필',
        },
        {
            title: '외국어',
        },
        {
            title: '대외활동',
        },
        {
            title: '보유기술'
        },
        {
            title: '자기소개서'
        },
        {
            title: '포트폴리오'
        }
    ]

    const [open, setOpen] = useState(false)

  return (
    <div className=''>
        {
            resumeData.map((data) => {
                return(
                    <>
                        <Button
                            onClick={() => {
                                setOpen(!open)
                            }}
                            aria-controls="forms"
                            aira-aria-expanded={open}
                        >
                            {data.name}
                        </Button>

                        <Collapse in={open}>
                            <Language data={data}/>
                        </Collapse>
                    </>
                )
            })
        }
    </div>
  
  )
}

const Language = ({data}) => {
    return(
        <div className="card mt-5">
            <div className="card-header">{data.title}</div>
            <div className="card-body">
                <AddLanguage/>
            </div>
        </div>
    )   
}

const AddLanguage = () => {
    return(
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
    )
}

export default AdminResume