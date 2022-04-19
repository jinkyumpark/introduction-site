import React, { useState, useEffect } from 'react';
import ClassificationIcon from './ClassificationIcon';
import Loading from '../../common/Loading';

import reactIcon from '../../../images/tech-icon/reactjs-icon.png';
import {GrLanguage as LanguageIcon, GrCompliance as ProgressIcon} from 'react-icons/gr'
import {BsGearWideConnected as ComplexityIcon} from 'react-icons/bs'
import {BiTimeFive as LengthIcon} from 'react-icons/bi'

import {Carousel, OverlayTrigger, Popover} from 'react-bootstrap';
import './carousel.css'

const Post = ({ blogNum, setIsBlogOpen }) => {
    const closeBlog = () => {
        setIsBlogOpen(false)
    }

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const post = {
        title: '리엑트 기초 공부',
        subtitle: '리엑트를 학원 Final Project에서 사용하기 위해 기초만 빠르게 공부',
        classification: {
            name: "React.js",
            icon: 'http://picsum.photos/400/400'
        },
        summary: [
            '',
            '',
            ''
        ],
        learned: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ],
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum et beatae exercitationem, ullam, 
        saepe natus consequuntur optio esse nostrum sequi, necessitatibus assumenda placeat est veritatis. Voluptatem dolores praesentium nulla ad?
        `
    }

    return (
        isLoading ?
            <Loading /> :

            <div className='overflow-hidden'>
                <div className="row">
                    <div className="col-10 h1">
                        {post.title}
                    </div>
                    <div className="col-2">
                        <div className="btn btn-close w-100 p-3" onClick={closeBlog}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-5 col-md-3">
                        <ClassificationIcon data={post.classification}/>
                    </div>

                    <div className="col-7 col-md-9 text-muted h3 mt-3">
                        {post.subtitle}
                    </div>
                </div>

                <div className='mt-3'>

                    <div className='mb-3'>
                        <div className="h3 mt-3">
                            배운 내용
                        </div>

                        <Carousel variant='dark' indicators={false}>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-3">
                                        <OverlayTrigger
                                            key='top'
                                            placement='top'
                                            overlay={
                                                <Popover>
                                                    <Popover.Body>
                                                        LEARNED CONCEPTS 
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                            >
                                            <button className='btn btn-outline-primary w-100'>Component</button>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            JSX
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            Props
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useState
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useEffect
                                        </div>

                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useRef
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useReducer
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            Context API
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            Custom Hooks
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            Router
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useMemo
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="btn btn-outline-primary w-100">
                                            useCallback
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className='mb-3'>
                        <div className="h3 mt-3">
                            3줄 요약
                        </div>

                        <div className="list-grouo">
                            <div className="list-group-item">
                                리엑트는 프론트엔드 개발을 쉽게 해 주는 JS 라이브러리이다.
                            </div>
                            <div className="list-group-item">
                                리엑트는 UI를 Component화 하고, state와 virtual DOM을 사용해 효율적으로 UI의 변화를 관리해 준다.
                            </div>
                            <div className="list-group-item">
                                리엑트는 JS를 사용해 재로딩 하지 않고 페이지를 이동하게 해 주는 SPA를 만들 수 있게 해 준다.
                            </div>
                        </div>
                    </div>


                    <div className='mt-5 mb-5'>
                        {post.content}
                    </div>

                    <div>


                        <div className="h3 mt-3 mb-2 mb-3">공부한 자료, 강의</div>

                        <div className="row">
                            <div className="col-2 align-self-center">
                                <div className="row justify-content-center">
                                    <img src={reactIcon} alt="REACT ICON" className='img-fluid'/>
                                    <div className="h3">React.js</div>
                                </div>
                            </div>

                            <div className="col-10">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <div className="row">
                                            <div className="col-8 col-md-10 align-self-center">
                                                Freecodecamp 유튜브 React 강의
                                            </div>
                                            <div className="col-4 col-md-2">
                                                <a className="btn btn-primary w-100" 
                                                href='https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s'
                                                target='_blank'
                                                >
                                                        링크
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-content p-2">
                                        리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                                        다양한 hooks(useState, useEffect)의 특징과 기능,
                                        React-router 등을 다룸
                                    </div>

                                    <div className="card-footer bg-transparent">

                                        <div className="row">


                                            <div className="col-6 col-md-3">
                                                <div className="btn btn-outline-primary w-100">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <LanguageIcon/>
                                                        </div>
                                                        <div className="col-9">
                                                            영어
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <div className="btn btn-outline-warning w-100">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <ProgressIcon/>
                                                        </div>
                                                        <div className="col-9">
                                                            3분의 2
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="btn btn-outline-danger w-100">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <ComplexityIcon/>
                                                        </div>
                                                        <div className="col-9">
                                                            하
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="btn btn-outline-primary w-100">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <LengthIcon/>
                                                        </div>
                                                        <div className="col-9">
                                                            약 8시간
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
    )
}

export default Post