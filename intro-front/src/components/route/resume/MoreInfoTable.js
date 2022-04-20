import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const MoreInfoTable = ({setIsPhoneRequestOpen}) => {
  return (
    <>
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

    </>
  )
}

export default MoreInfoTable