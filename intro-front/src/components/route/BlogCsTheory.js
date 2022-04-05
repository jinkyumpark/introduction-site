import React from 'react'
import algo from '../../images/cs-algo.png'
import {
    FcParallelTasks as AlgoIcon, FcRadarPlot as DataStructureIcon, FcAcceptDatabase as DbIcon,
    FcCalculator as ComputationIcon, FcAdvance as NetworkIcon, FcElectronics as OsIcon
} from 'react-icons/fc'

const BlogCsTheory = () => {
    const classificationData = [
        {
            name: "알고리즘",
            icon: 1
        },
        {
            name: "데이터구조",
            icon: 2
        },
        {
            name: "네트워크",
            icon: 3
        },
        {
            name: "데이터베이스",
            icon: 4
        },
        {
            name: "컴퓨테이션 이론",
            icon: 5
        },
        {
            name: "운영체제",
            icon: 6
        }
    ]

    return (
        <div>
            <div className="h1">컴퓨터 과학 이론</div>

            <div className="row">
                {
                    classificationData.map((data) => {
                        return (
                            <div className="col-4 col-md-2">
                                <ClassificationIcon
                                    data={data}
                                />
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}

const ClassificationIcon = ({ data }) => {
    const { name, icon } = data

    return (
        <div className='btn btn-outline-dark mt-3'>
            <div className="row" style={{ height: '50px' }}>
                <div className="col-3">
                    {
                        icon === 1 ?
                            <AlgoIcon className='' style={{ width: '50px', height: '50px' }} />
                            : icon === 2 ?
                                <DataStructureIcon className='' style={{ width: '50px', height: '50px' }} />
                                : icon === 3 ?
                                    <NetworkIcon className='' style={{ width: '50px', height: '50px' }} />
                                    : icon === 4 ?
                                        <DbIcon className='' style={{ width: '50px', height: '50px' }} />
                                        : icon === 5 ?
                                            <ComputationIcon className='' style={{ width: '50px', height: '50px' }} />
                                            :
                                            <OsIcon className='' style={{ width: '50px', height: '50px' }} />
                    }
                </div>
                <div className="col-9">
                    <div className="h5">{name}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCsTheory