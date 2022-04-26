import React from 'react'
import {OverlayTrigger, Popover} from 'react-bootstrap'

const PortfolioCard = ({ portfolio, setIsPortfolioOpen, setSelectedPortfolioNum, isLinkActive }) => {
    const { img, title, content, link, startDate, endDate, status, num } = portfolio

    const openPortfolioDetail = () => {
        setIsPortfolioOpen(true)
        setSelectedPortfolioNum(num)
    }

    return (
        <div className="card mb-4">
            <img src={'/images/' + img} alt="" className="card-img-top" />
            <div className="card-body" onClick={() => openPortfolioDetail}>
                <div className="card-title h5">{title}</div>
                <p className="card-text">{content}</p>
                <div className="row">
                    <div className="col-6">
                        <button className='btn btn-primary w-100' onClick={openPortfolioDetail}>자세히 보기</button>
                    </div>
                    <div className="col-6">
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        실제 동작하는 사이트를 직접 사용해 보실 수 있어요
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                            <a href={link} target='_blank' className={'btn btn-primary w-100' + (!isLinkActive ? ' disabled' : '')}>직접 사용해 보기</a>
                        </OverlayTrigger>

                    </div>
                </div>
            </div>
            <div className="card-footer text-muted text-center">{startDate} - {endDate}</div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-3">
                        <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        프로젝트를 기획하고 있어요. 아직 제작을 시작하지는 않았어요
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                            <button className={"btn btn-outline-danger w-100 h-100" + (status === 0 ? " active" : "")}>시작전</button>
                        </OverlayTrigger>
                    </div>
                    <div className="col-3">
                        <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        프로젝트를 열심히 제작하고 있어요. 아직 미완성이라 직접 사용해 보실 수는 없어요. 
                                        하지만 궁금하시다면 완성되면 어떤 모습일지는 미리 보실 수 있어요!
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                            <button className={"btn btn-outline-primary w-100 h-100" + (status === 1 ? " active" : "")}>진행중</button>
                        </OverlayTrigger>

                    </div>
                    <div className="col-3">
                        <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        프로젝트를 완성했어요! 방문해서 직접 사용해 보실 수 있어요.
                                        완성됐기 때문에 모든 기능은 정상 작동하지만, 새로운 기능을 추가하거나 문제가 생겨도 적극적으로 대처하고 있지는 않아요
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                            <button className={"btn btn-outline-success w-100 h-100" + (status === 2 ? " active" : "")}>완료</button>
                        </OverlayTrigger>
                    </div>

                    <div className="col-3">
                        <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        완성된 프로젝트를 적극적으로 관리하고 있어요.
                                        오류에는 즉각적으로 대처하고 있고, 새로운 기능을 계속 추가 중 이에요.
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                            <button className={"btn btn-outline-warning w-100 h-100" + (status === 3 ? " active" : "")}>유지보수</button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard