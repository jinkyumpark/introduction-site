import React, { useState, useEffect } from 'react';

import ClassificationIcon from './ClassificationIcon';

// Components
import Loading from '../../common/Loading';
import Error from '../../common/Error';

// React icons
import {GrLanguage as LanguageIcon, GrCompliance as ProgressIcon} from 'react-icons/gr'
import {BsGearWideConnected as ComplexityIcon} from 'react-icons/bs'
import {BiTimeFive as LengthIcon} from 'react-icons/bi'

// Bootstrap
import {Carousel, OverlayTrigger, Popover} from 'react-bootstrap';
import './carousel.css'

const Post = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState(null)

    const dummyPost = {
        title: '리엑트 기초 공부',
        subtitle: '리엑트를 학원 Final Project에서 사용하기 위해 기초만 빠르게 공부',
        classification: {
            name: "React.js",
            icon: 'http://picsum.photos/400/400',
            type: 'theory'
        },
        summary: [
            '리엑트는 프론트엔드 개발을 쉽게 해 주는 JS 라이브러리이다.',
            '리엑트는 UI를 Component화 하고, state와 virtual DOM을 사용해 효율적으로 UI의 변화를 관리해 준다.',
            '리엑트는 JS를 사용해 재로딩 하지 않고 페이지를 이동하게 해 주는 SPA를 만들 수 있게 해 준다.'
        ],
        concepts: [
            {
                key: 524350,
                title: 'useEffect',
                content: ''
            },
            {
                key: 43521,
                title: 'useRef',
                content: ''
            },
            {
                key: 24352342,
                title: 'useReducer',
                content: ''
            },
            {
                key: 85673563,
                title: 'Context API',
                content: ''
            },
            {
                key: 84684,
                title: 'Custom Hooks',
                content: ''
            },
            {
                key: 56523456368,
                title: 'Router',
                content: ''
            },
            {
                key: 68468,
                title: 'useMemo',
                content: ''
            },
            {
                key: 262467,
                title: 'useCallback',
                content: ''
            },
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
        `,
        learningContent: [
            {
                key: 0,
                classification: {
                    title: 'React.js',
                    Icon: 'http://picsum.photos/400/400'
                },
                title: 'Freecodecamp 유튜브 React 강의',
                link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s',
                content: `리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                다양한 hooks(useState, useEffect)의 특징과 기능,
                React-router 등을 다룸`,
                language: '영어',
                finishPercent: 10,
                difficulty: 0,
                duration: 5,
            },
            {
                key: 1,
                classification: {
                    title: 'React.js',
                    Icon: 'http://picsum.photos/400/400'
                },
                title: 'Freecodecamp 유튜브 React 강의',
                link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s',
                content: `리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                다양한 hooks(useState, useEffect)의 특징과 기능,
                React-router 등을 다룸`,
                language: '영어',
                finishPercent: 10,
                difficulty: 0,
                duration: 5,
            },
            {
                key: 2,
                classification: {
                    title: 'React.js',
                    Icon: 'http://picsum.photos/400/400'
                },
                title: 'Freecodecamp 유튜브 React 강의',
                link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s',
                content: `리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                다양한 hooks(useState, useEffect)의 특징과 기능,
                React-router 등을 다룸`,
                language: '영어',
                finishPercent: 10,
                difficulty: 0,
                duration: 5,
            },
            {
                key: 3,
                classification: {
                    title: 'React.js',
                    Icon: 'http://picsum.photos/400/400'
                },
                title: 'Freecodecamp 유튜브 React 강의',
                link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s',
                content: `리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                다양한 hooks(useState, useEffect)의 특징과 기능,
                React-router 등을 다룸`,
                language: '영어',
                finishPercent: 10,
                difficulty: 0,
                duration: 5,
            },
            {
                key: 4,
                classification: {
                    title: 'React.js',
                    Icon: 'http://picsum.photos/400/400'
                },
                title: 'Freecodecamp 유튜브 React 강의',
                link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4&t=18978s',
                content: `리엑트의 기초 문법과 react를 개발하기 위해 필요한 다양한 기능을 다루는 강의.
                다양한 hooks(useState, useEffect)의 특징과 기능,
                React-router 등을 다룸`,
                language: '영어',
                finishPercent: 10,
                difficulty: 0,
                duration: 5,
            },
        ]
    }
    
    useEffect(() => {
        // Fetch Data Here
        setPost(dummyPost);
    }, [])

    const splitArray = (data) => {
        const result = 
            new Array(Math.ceil(data.length / 4))
                .fill()
                .map(_ => data.splice(0, 4))
        return result
    }

    return (
        isLoading ?
            <Loading /> :

            post == null || post.length == 0 ?
            <Error/>
            :
            <div className='overflow-hidden'>
                <div className="row">
                    <div className="col-12 h2 text-center">
                        {post.title}
                    </div>
                </div>

                <div className="row">
                    <div className="col-5 col-md-3">
                        <ClassificationIcon data={post.classification}/>
                    </div>

                    <div className="col-7 col-md-9 text-muted h4 mt-3">
                        {post.subtitle}
                    </div>
                </div>

                <div className='mt-3'>

                    <div className='mb-3'>
                        <div className="h3 mt-3">
                            배운 내용
                        </div>

                        <Carousel variant='dark' indicators={false}>
                            {
                                post.concepts == null || post.concepts.length == 0 ?
                                <div className='text-center h3'>
                                    배운 개념이 없어요
                                </div>
                                :
                                splitArray(post.concepts).map((arr) => {                        
                                    return(
                                        <Carousel.Item>
                                            <div className="row">
                                                {
                                                    arr.map((concept) => {
                                                        return(
                                                            <div className="col-3">
                                                                <LearningConcept concept={concept}/>                                        
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
                    </div>


                    <div className='mb-3'>
                        <div className="h3 mt-3">
                            3줄 요약
                        </div>

                        <div className="list-group">
                            {
                                post.summary.map((sum) => {
                                    return(
                                        <div className="list-group-item">
                                            {sum}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className='mt-5 mb-5'>
                        {post.content}
                    </div>

                    <div>
                        <div className="h3 mt-3 mb-2 mb-3">공부한 자료, 강의</div>
                        {
                            post.learningContent.map((content) => {
                                return(
                                    <LearingContentCard content={content} className='mb-5'/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

const LearingContentCard = ({content}) => {
    return(
        <div className="row mb-4">
        <div className="col-2 align-self-center">
            <div className="row justify-content-center">
                <img src={content.classification.icon} alt={content.classification.title + 'Icon'} className='img-fluid rounded-circle'/>
                <div className="h3 text-center">{content.classification.title}</div>
            </div>
        </div>

        <div className="col-10">
            <div className="card">
                <div className="card-header text-center">
                    <div className="row">
                        <div className="col-8 col-md-10 align-self-center">
                            {content.title}
                        </div>
                        <div className="col-4 col-md-2">
                            <a className="btn btn-primary w-100" 
                            href={content.link}
                            target='_blank'
                            >
                                    링크
                            </a>
                        </div>
                    </div>

                </div>
                <div className="card-content p-2">
                    {content.content}
                </div>

                <div className="card-footer bg-transparent">

                    <div className="row">


                        <div className="col-6 col-md-3">
                            <div className="btn btn-outline-dark w-100">
                                <div className="row">
                                    <div className="col-3">
                                        <LanguageIcon/>
                                    </div>
                                    <div className="col-9">
                                        {content.language}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className={"btn w-100 " + (content.finishPercent < 30 ? 'btn-outline-danger' : content.finishPercent < 60 ? 'btn-outline-warning' : 'btn-outline-success')}>
                                <div className="row">
                                    <div className="col-3">
                                        <ProgressIcon/>
                                    </div>
                                    <div className="col-9">
                                        {
                                            content.finishPercent < 30 ?
                                                '3분의 1'
                                            :
                                            content.finishPercent < 60 ?
                                                '3분의 2'
                                            :
                                                '완료!'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className={"btn w-100 " + (content.difficulty == 0 ? 'btn-outline-danger' : content.difficulty == 1 ? 'btn-outline-warning' : 'btn-outline-success')}>
                                <div className="row">
                                    <div className="col-3">
                                        <ComplexityIcon/>
                                    </div>
                                    <div className="col-9">
                                        {
                                            content.difficulty == 0 ?
                                            '하'
                                            : content.difficulty == 1 ?
                                            '중'
                                            : '상'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className={"btn w-100 " + (content.duration < 1 ? 'btn-outline-danger' : content.duration < 3 ? 'btn-outline-warning' : 'btn-outline-success')}>
                                <div className="row">
                                    <div className="col-3">
                                        <LengthIcon/>
                                    </div>
                                    <div className="col-9">
                                        
                                        {
                                            content.duration < 1 ?
                                            content.duration * 60 + '분'
                                            :
                                            '약 ' + Math.round(content.duration) + '시간'
                                        }
                                         
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

const LearningConcept = ({concept}) => {
    return(
        <OverlayTrigger
            placement='top'
            overlay={
                <Popover>
                    <Popover.Body>
                        {concept.content} 
                    </Popover.Body>
                </Popover>
            }
            >
            <button className='btn btn-outline-primary w-100'>{concept.title}</button>
        </OverlayTrigger>
    )
}

export default Post