import React from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap'

const LanguageTable = () => {
    const languageData = [
        {
            key: 0,
            title: '🇺🇸 영어',
            titleDescription: '의사소통 자유로움, 영어 독해 자유로움(1달에 적어도 1권 이상의 영어책 독서 중), 미국 대학에서 3년 수학',
            speaking: '상',
            reading: '상',
            testScore: 'TOEIC 970',
            testScoreDescription: '2021년 7월 응시'
        },
        {
            key: 1,
            title: '🇯🇵 일본어',
            titleDescription: `고등학교때 일본어 수업을 듣고 흥미가 생겨 공부 시작.
            취미로 공부했으나 의사소통 자유롭고, 
            일본어 책 100권 이상 독서해서 독해도 능숙하게 가능.
`,
            speaking: '상',
            reading: '상',
            testScore: 'JLPT N1',
            testScoreDescription: '2018년 10월 응시'
        },
        {
            key: 2,
            title: '🇨🇳 중국어',
            titleDescription: `초등학교 1학년 ~ 초등학교 3학년까지 아버지의 직장으로 중국에서 유학.
            그 후 중국어를 적극적으로 사용하지 않아 많이 서툴러졌으나 기본적인 일상 회화는 가능.
            현재 취미로 공부 중.`,
            speaking: '하',
            reading: '하',
            testScore: 'HSK 3급',
            testScoreDescription: '2022년 내에 재응시 예정'
        },
    ]

    return (
        <table className="table w-100 text-center border border-rounded">
            <thead>
                <th scope='col'>언어</th>
                <th scope='col'>회화</th>
                <th scope='col'>독해</th>
                <th scope='col'>시험점수</th>
            </thead>

            <tbody>
                {
                    languageData.map((language) => {
                        return(
                            <tr>
                                <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Popover>
                                            <Popover.Body>
                                                {language.titleDescription}
                                            </Popover.Body>
                                        </Popover>
                                    }
                                    >
                                    <th scope='row'>{language.title}</th>
                                </OverlayTrigger>
            
                                    <td>{language.speaking}</td>
                                    <td>{language.reading}</td>
            
                                    <OverlayTrigger
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Popover>
                                            <Popover.Body>
                                                {language.testScoreDescription}
                                            </Popover.Body>
                                        </Popover>
                                    }
                                    >
                                    <td>{language.testScore}</td>
                                </OverlayTrigger>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default LanguageTable