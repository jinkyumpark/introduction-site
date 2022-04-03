import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const PortfolioCard = ({portfolio}) => {
    const {img, title, content, link, startDate, endDate, status} = portfolio

    return (
    <div className="card mb-4">
        <img src={img} alt="" className="card-img-top" />
        <div className="card-body">
            <div className="card-title h5">{title}</div>
            <p className="card-text">{content}</p>
            <div className="row">
                <div className="col-6">
                    <a href="/portfolio" className='btn btn-primary w-100'>자세히 보기</a>
                </div>
                <div className="col-6">
                    <a href={link} target='_blank' className='btn btn-primary w-100'>직접 사용해 보기</a>
                </div>
            </div>
        </div>
        <div className="card-footer text-muted text-center">{startDate} - {endDate}</div>
        <div className="card-footer">
            <div className="row">
                <div className="col-3">
                    <button className={ "btn btn-outline-danger w-100 h-100" + (status === 0 ? " active" : "")}>시작전</button>
                </div>
                <div className="col-3">
                    <button className={ "btn btn-outline-primary w-100 h-100" + (status === 1 ? " active" : "")}>진행중</button>
                </div>
                <div className="col-3">
                    <button className={ "btn btn-outline-success w-100 h-100" + (status === 2 ? " active" : "")}>완료</button>
                </div>
                <div className="col-3">
                    <button className={ "btn btn-outline-warning w-100 h-100" + (status === 3 ? " active" : "")}>유지보수</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PortfolioCard