import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom'

import Error from '../../common/Error'

import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'
import fetchUrl from '../../common/fetchvar'
import NoContent from '../blog/NoPost'

const TechCard = ({ tech }) => {
    const { name, img, summary, num } = tech
    const [section, setSection] = useState(0)
    const [posts, setPosts] = useState(null)

    const portfolios = [
        {
            key: 0,
            num: 0,
            title: 'TITLE 1',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 3         
        },
        {
            key: 1,
            num: 1,
            title: 'TITLE 2',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 1         
        },
        {
            key: 2,
            num: 2,
            title: 'TITLE 3',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 2         
        },
        {
            key: 3,
            num: 3,
            title: 'TITLE 4',
            description: 'DESCRIPTION 1',
            img: 'http://picsum.photos/400/400/',
            status: 4         
        }
    ]

    useEffect(() => {
        if(section == 1) {
        } else {
            fetch(fetchUrl + '/api/resume/tech/post/' + num)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPosts(data)
                }) 
                .catch((err) => {
                    return err
                })
        }
    }, [section])

    return (
        <div className="card mt-3">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 0 ? ' active' : '')} onClick={() => setSection(0)}>소개</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 1 ? ' active' : '')} onClick={() => setSection(1)}>포트폴리오</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 2 ? ' active' : '')} onClick={() => setSection(2)}>포스트</button>
                    </li>
                </ul>
            </div>

            <div className="card-body">
            <div className="row">
                <div className="col-12 col-md-2 align-self-center">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-12">
                            <img src={fetchUrl + '/images/' + img} alt="" style={{ width: '75px' }} className='w-100 mb-3' />
                        </div>
                    </div>
                    <div className="h3 text-center">{name}</div>
                </div>
                <div className="col-12 col-md-10" style={{overflowY: 'auto', height: '220px'}}>
                    {
                        section == 0 ?
                        <IntroSection tech={tech}/> :
                        section == 1 ?
                        <PortfolioSection
                            portfolios={portfolios}
                            name={name}
                        /> :
                        <PostSection
                            posts={posts}
                            name={name}
                        />
                    }
                </div>
            </div>
        </div>

        </div>
    )
}

const IntroSection = ({tech}) => {
    const { name, img, description } = tech

    return(
        <div className="col align-self-center">
        <ul className="list-group list-group-flush">
            {
                description == null  || description.length == 0 ?
                <div className="h1 text-center mt-5">
                    아직 보유 기술에 대한 요약이 없어요
                </div>
                :
                description.map((des) => {
                    return(
                        <>
                            {
                                des == null ?
                                <Error/>
                                :
                                <li className="list-group-item p-3">{des}</li>
                            }                        
                        </>
                    )
                })
            }
        </ul>
    </div>
    )
}

const PortfolioSection = ({portfolios, name}) => {
    return(
        <div className='col align-self-center'>
            {
                portfolios == null || portfolios.length == 0 ?
                <div className='mt-4'>
                    <NoContent message={name + '사용된 포트폴리오가 없어요'} size='100'/>
                </div >
                :
                <>
                    {
                        portfolios.map((portfolio) => {
                            return(
                                <div className="card mt-3 portfolioListCard">
                                    <div className="row me-2">

                                        <div className="col-12 col-md-3">
                                            <img src={portfolio.img} alt='PORTFOLIO IMAGE' className="img-fluid" />
                                        </div>

                                        <div className="col-6 mt-2">
                                            <div className="h3">{portfolio.title}</div>

                                            <div className="h5 text-muted">{portfolio.description}</div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

const PostSection = ({posts, name}) => {

    return(
        <div className='col align-self-center'>
            {
                (posts == null || posts.length == 0) ?
                    <div className='mt-4'>
                        <NoContent message={name + ' 관련된 포스트가 없어요'} size='100'/>
                    </div>
                :
                    <>
                        <div className='align-baseline'>
                            {
                                posts.map((post) => {
                                    return(
                                        <Link to={'/blog/dev/' + post.num} className='text-dark text-decoration-none hoverEffect'>
                                            <div className="row border rounded p-2 mt-2">
                                                <div className="col-4 col-md-2 align-self-center">
                                                    <div className="row justify-content-center">
                                                        <div className="col-4 align-self-center">
                                                            <img src={fetchUrl + '/images/' + post.category.img} alt="" className='img-fluid'/>    
                                                        </div>
                                                        <div className="col-8">
                                                            {post.category.title}
                                                        </div>    
                                                    </div>                            
                                                </div>

                                                <div className="col-4 col-md-8 align-self-center">
                                                    {post.title}
                                                </div>

                                                <div className="col-3 col-md-2 text-muted align-self-center">
                                                    {
                                                        post.date
                                                            .substring(2, post.date.indexOf('T'))
                                                            .replace('-', '년 ')
                                                            .replace('-', '월 ')
                                                            .concat('일')
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default TechCard