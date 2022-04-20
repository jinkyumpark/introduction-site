import React, { useEffect, useState } from 'react'
import { Collapse, Button, OverlayTrigger, Popover, Modal, Carousel } from 'react-bootstrap'

import reactIcon from '../../../images/tech-icon/reactjs-icon.png'

import TechCard from './TechCard'


const TechTable = ({techSummary, techData, techHeaderData, techPage, setTechPage}) => {
    const [isDesOpen, setIsDesOpen] = useState(false)

  return (
      <>
    <div className="row">
        <div className="col-md-8 col-lg-9 col-5">
            <div className="h2">보유기술 (총 {techSummary.techNum}개)</div>
        </div>
        <div className="col-md-4 col-lg-3 col-7">

            <Button
                onClick={() => setIsDesOpen(!isDesOpen)}
                aria-controls='techDes'
                aria-expanded={isDesOpen}
                className='btn-primary w-100'
            >{techSummary.buttonTitle}</Button>

        </div>
    </div>

    <Collapse in={isDesOpen} className='mt-3 h6 text-muted'>
        <div className="card card-body" id='techDes' style={{ lineHeight: '2rem' }}>
            {techSummary.buttonDescription}
        </div>
    </Collapse>

    <div className='mt-3 mb-3'>
        {
            techHeaderData == null || techHeaderData.length == 0 ?
            <>
                ERROR
            </>
            :
            <Carousel variant='dark' indicators={false}>
                {
                    techHeaderData.map((arr) => {
                        return(
                            <Carousel.Item>
                                <div className="row ps-5 pe-5" style={{height: '100px'}}>
                                {
                                    arr.map((tech) => {
                                        return(
                    
                                            <div className="col-4 col-md-3">
                                                <div className="row h-100 w-100 border justify-content-center">
                                                    <div className="col-12 align-self-center text-center mt-2">
                                                        <img src={tech.img} alt="" style={{width: '50px', height: '50px'}} className='img-fluid mx-auto d-block rounded-circle'/>
                                                    </div>
                                                    <div className="col-12 align-self-center">
                                                        <div className="h3 text-center">
                                                            {tech.title}      
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>
                    
                                        )
                                    })
                                }
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        }

    </div>

    {
        techData == null || techData.length == 0 ?
        <>
            ERROR
        </>
        :
        techData.map((data) => {
            return (
                <TechCard
                    tech={data}
                />
            )
        })
    }

    <div className="row mt-3 justify-content-center">
        <div className="col-12 align-self-center">
            <ul class="pagination justify-content-center">
                <li class="page-item" onClick={() => {
                    if(techPage >= 1) {
                        setTechPage(techPage - 1)
                    }
                }}><div class="page-link" href="#">{'<'}</div></li>
                {
                    [ ...Array(Math.floor(techSummary.techNum / 3)) ].map((item, index) => {
                        return(
                            <li class={"page-item" + (techPage == index ? ' active' : '')}
                                onClick={() => {
                                    setTechPage(index)
                                }}
                            
                            ><div class="page-link">{index + 1}</div></li>
                        )
                    })
                }
                <li class="page-item" onClick={() => {
                    if(techPage < Math.floor(techSummary.techNum / 3) - 1) {
                        setTechPage(techPage + 1)
                    }
                }}><div class="page-link">{'>'}</div></li>
            </ul>
        </div>
    </div>
</>
)
}

export default TechTable