import React, {useState} from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

import Error from '../../common/Error'

const InterviewTable = ({questionData, introductionData}) => {
    const [isInterviewSelected, setIsInterviewSelected] = useState(true)

    return (
        <>
            <div className="row mb-3">
                <div className="col-5 col-md-7 col-lg-8">
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        이력서에는 일반적인 자기소개서를 첨부했지만, 인터뷰 형식으로 작성하면 구어체라 읽기도 더 편하고,
                                        관심 있는 부분만 읽으실 수 있기 때문에 더 유저 친화적이지 않을까 생각해서 인터뷰 형식으로 작성해 봤습니다.
                                        일반적인 자기소개서를 선호하시면 옆에 버튼으로 전환하실 수 있습니다.
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                        <div className="h2">자기소개서</div>
                    </OverlayTrigger>
                </div>

                <div className="col-7 col-md-5 col-lg-4">
                        <button className={isInterviewSelected ? "btn btn-primary w-100" : "btn btn-warning w-100"}
                            onClick={() => {
                                setIsInterviewSelected(!isInterviewSelected)
                            }}
                        >
                            {
                                isInterviewSelected ? '일반적인 자기소개서로 바꾸기' : '인터뷰 형식의 자기소개서로 바꾸기'
                            }
                        </button>
                </div>
            </div>


            <div className="card">
                {
                    isInterviewSelected ? 
                        introductionData == null ?
                        <Error/>
                        :
                        <>
                            <div className="card-header text-center h4">{introductionData.questionTitle}</div>

                            <div className="card-body">
                                {
                                    questionData == null ?
                                    <Error/>
                                    :
                                    questionData.map((data) => {
                                        return(
                                            <div>
                                                <div className="card-title h5 mt-2">{data.question}</div>
                                                <p className="card-text mt-2" style={{lineHeight: '1.7rem'}}>{data.answer}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>                
                        </>   
                    :
                    <>
                        <div className="card-header text-center h4">{introductionData.title}</div>
                        
                        <div className="card-body p-4">
                            {introductionData.content}
                        </div>
                    </>
                }
            </div>
        
        </>
    )
}

export default InterviewTable