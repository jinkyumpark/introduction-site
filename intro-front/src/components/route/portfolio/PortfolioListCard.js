// React
import React from 'react'

// Bootstrap
import {OverlayTrigger, Popover} from 'react-bootstrap'

const PortfolioListCard = ({portfolio, openPortfolio}) => {
  return (
    <div className="card mt-3">
        <div className="row me-2 h-100" onClick={() => openPortfolio(portfolio.portfolioNum)}>

            <div className="col-9 col-md-10 portfolioListCard">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img src={'/images/' + portfolio.img} alt='PORTFOLIO DEMO' className="img-fluid" style={{ width: '300px', height: '200px' }} />
                    </div>

                    <div className="col-12 col-md-7 mt-2 ms-2 ms-md-0">
                        <div className="h2">{portfolio.title}</div>

                        <div className="h4 text-muted">{portfolio.content == null ? '아직 포트폴리오에 대한 소개가 없어요' : portfolio.content}</div>
                    </div>
                </div>
            </div>

            <div className="col-3 col-md-2 align-self-center">
                <OverlayTrigger
                    key='notStarted'
                    placement='top'
                    overlay={
                        <Popover>
                            <Popover.Body>
                                프로젝트를 기획하고 있어요. 아직 제작을 시작하지는 않았어요
                            </Popover.Body>
                        </Popover>
                    }
                    >
                    <div className={"btn btn-outline-danger w-100 mt-2" + (portfolio.status == 0 ? ' active' : '')}>시작전</div>
                </OverlayTrigger>
                <OverlayTrigger
                    key='progressing'
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
                    <div className={"btn btn-outline-primary w-100 mt-2" + (portfolio.status == 1 ? ' active' : '')}>진행중</div>
                </OverlayTrigger>

                <OverlayTrigger
                    key='finished'
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
                    <div className={"btn btn-outline-success w-100 mt-2" + (portfolio.status == 2 ? ' active' : '')}>완료</div>
                </OverlayTrigger>
                <OverlayTrigger
                    key='maintaining'
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
                    <div className={"btn btn-outline-warning w-100 mt-2" + (portfolio.status == 3 ? ' active' : '')}>유지보수</div>
                </OverlayTrigger>
            </div>

        </div>
    </div>
)
}

export default PortfolioListCard