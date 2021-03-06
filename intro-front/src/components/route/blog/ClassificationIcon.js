import React from 'react'
import fetchUrl from '../../common/fetchvar'

const ClassificationIcon = ({ data, isActive }) => {
    const { name, icon } = data

    return (
        <div className={'btn btn-outline-dark mt-3 w-100' + (isActive ? ' active' : '')}>
            <div className="row" style={{ height: '50px' }}>
                <div className="col-3 align-self-center">
                    {
                        <img src={fetchUrl + '/images/' + icon} alt="ICON" style={{ width: '35px', height: '35px'}} className='rounded-circle'/>
                    }
                </div>
                <div className="col-9 align-self-center">
                    <div className="h5">{
                        (name == null || name == '') ?
                        '카테고리 없음'
                        :
                        name
                    }</div>
                </div>
            </div>
        </div >
    )
}

export default ClassificationIcon