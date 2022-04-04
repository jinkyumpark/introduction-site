import React from 'react'
import reactIcon from '../../../images/reactjs-icon.png'

const TechCard = ({ tech }) => {
    const { name, img, summary } = tech

    return (
        <div className="card mt-3">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a href="/" className="nav-link active">소개</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">포트폴리오</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">포스트</a>
                    </li>
                </ul>
            </div>

            <div className="card-body">
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={reactIcon} alt="React Icon" style={{ width: '75px' }} className='me-2' />
                            <div className="h2">{name}</div>
                        </div>
                        <div className="col">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{summary.sum1}</li>
                                <li className="list-group-item">{summary.sum2}</li>
                                <li className="list-group-item">{summary.sum3}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TechCard