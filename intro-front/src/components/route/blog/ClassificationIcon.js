import React from 'react'
import {
    FcParallelTasks as AlgoIcon, FcRadarPlot as DataStructureIcon, FcAcceptDatabase as DbIcon,
    FcCalculator as ComputationIcon, FcAdvance as NetworkIcon, FcElectronics as OsIcon
} from 'react-icons/fc'

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

export default ClassificationIcon