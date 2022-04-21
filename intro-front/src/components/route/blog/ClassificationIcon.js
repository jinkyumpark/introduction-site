import React from 'react'
import {
    FcParallelTasks as AlgoIcon, FcRadarPlot as DataStructureIcon, FcAcceptDatabase as DbIcon,
    FcCalculator as ComputationIcon, FcAdvance as NetworkIcon, FcElectronics as OsIcon
} from 'react-icons/fc'
import { FcIntegratedWebcam as FrontIcon, FcLinux as BackIcon, FcEngineering as DevopsIcon } from 'react-icons/fc'


const ClassificationIcon = ({ data, isCs, isDev }) => {
    const { name, icon } = data

    return (
        <div className='btn btn-outline-dark mt-3 w-100'>
            <div className="row" style={{ height: '50px' }}>
                <div className="col-3 align-self-center">
                    {
                        isCs ?
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
                            : isDev ?
                                icon === 1 ?
                                    <FrontIcon className='' style={{ width: '50px', height: '50px' }} />
                                    : icon === 2 ?
                                        <BackIcon className='' style={{ width: '50px', height: '50px' }} /> :
                                        <DevopsIcon className='' style={{ width: '50px', height: '50px' }} /> :
                                <img src={icon} alt="ICON" style={{ width: '50px', height: '50px'}} className='rounded-circle'/>

                    }
                </div>
                <div className="col-9 align-self-center">
                    <div className="h5">{name}</div>
                </div>
            </div>
        </div >
    )
}

export default ClassificationIcon