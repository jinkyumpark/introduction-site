import React from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap'

import Error from '../../common/Error'

const LanguageTable = ({languageData}) => {

    return (
        <>
            <div className="h2 mb-3">외국어</div>

            <table className="table w-100 text-center border border-rounded">
                <thead>
                    <th scope='col'>언어</th>
                    <th scope='col'>회화</th>
                    <th scope='col'>독해</th>
                    <th scope='col'>시험점수</th>
                </thead>

                <tbody>
                    {
                        languageData == null ?
                        <Error/>
                        :
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
                                        <th scope='row'>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={'/images/' + language.titleImage} alt={language.titleImageAlt} style={{width: '20px'}}/>
                                                </div>
                                                <div className="col-6">
                                                    {language.title}
                                                </div>
                                            </div>
                                        </th>
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

        </>
    )
}

export default LanguageTable