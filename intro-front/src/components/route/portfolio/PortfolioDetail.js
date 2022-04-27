import React from 'react'
import { Link } from 'react-router-dom'

import MoreButton from '../../common/MoreButton'
import PostCard from '../blog/PostCard'

import {BsGithub as GithubIcon, BsLink45Deg as LinkIcon} from 'react-icons/bs'
import {AiOutlineClose as CloseIcon} from 'react-icons/ai'
import { Modal } from 'react-bootstrap'

const PortfolioDetail = () => {

  const portfolio = {
    title: '자기소개 사이트',
    image: 'http://picsum.photos/400/400',
    summary: `
      프로그래머로써의 진로를 처음 결심했을때, 일단 제 자신을 소개하고 표현할 수 있는 사이트를 만들어야 겠다고 결심했습니다.
    `,
	startDate: '22년 3월',
	endDate: '22년 4월',
	developerCount: 1,
	githubLink: 'https://github.com/jinkyumpark/development-introduction-site',
	websiteLink: 'jinkyumpark.com',
	func: [
		{
			title: '이력서',
			content: `이력서가 꼭 정형적이여야 할까 라는 고민에서, 조금 특별한 이력서를 만들어 봤습니다.
			단순히 보유기술이라고 하는게 아닌, 제가 그 기술에 어떤 역량을 가지고 있는지 한 눈에 볼 수 있게 그 기술이 사용된 포트폴리오와 포스트를 보여주고,
			길고 지루한 자기 소개서가 아닌 인터뷰 형식으로 만들어 읽기도 쉽고, 관심 있는 부분만 읽으실 수 있게 구성했습니다.`,
			img: 'http://picsum.photos/1600/900'
		},
		{
			title: '이력서',
			content: `이력서가 꼭 정형적이여야 할까 라는 고민에서, 조금 특별한 이력서를 만들어 봤습니다.
			단순히 보유기술이라고 하는게 아닌, 제가 그 기술에 어떤 역량을 가지고 있는지 한 눈에 볼 수 있게 그 기술이 사용된 포트폴리오와 포스트를 보여주고,
			길고 지루한 자기 소개서가 아닌 인터뷰 형식으로 만들어 읽기도 쉽고, 관심 있는 부분만 읽으실 수 있게 구성했습니다.`,
			img: 'http://picsum.photos/1600/900/'
		},
		{
			title: '이력서',
			content: `이력서가 꼭 정형적이여야 할까 라는 고민에서, 조금 특별한 이력서를 만들어 봤습니다.
			단순히 보유기술이라고 하는게 아닌, 제가 그 기술에 어떤 역량을 가지고 있는지 한 눈에 볼 수 있게 그 기술이 사용된 포트폴리오와 포스트를 보여주고,
			길고 지루한 자기 소개서가 아닌 인터뷰 형식으로 만들어 읽기도 쉽고, 관심 있는 부분만 읽으실 수 있게 구성했습니다.`,
			img: 'http://picsum.photos/1600/900//'
		},
		{
			title: '이력서',
			content: `이력서가 꼭 정형적이여야 할까 라는 고민에서, 조금 특별한 이력서를 만들어 봤습니다.
			단순히 보유기술이라고 하는게 아닌, 제가 그 기술에 어떤 역량을 가지고 있는지 한 눈에 볼 수 있게 그 기술이 사용된 포트폴리오와 포스트를 보여주고,
			길고 지루한 자기 소개서가 아닌 인터뷰 형식으로 만들어 읽기도 쉽고, 관심 있는 부분만 읽으실 수 있게 구성했습니다.`,
			img: 'http://picsum.photos/1600/900///'
		}
	],
	tech: [
		{
			key: 1,
			title: '리엑트',
			content: '전체적인 사이트 구조',
			img: 'http://picsum.photos/400/123'
		},
		{
			key: 1,
			title: '리엑트',
			content: '전체적인 사이트 구조',
			img: 'http://picsum.photos/400/123'
		},
		{
			key: 1,
			title: '리엑트',
			content: '전체적인 사이트 구조',
			img: 'http://picsum.photos/400/123'
		},
		{
			key: 1,
			title: '리엑트',
			content: '전체적인 사이트 구조',
			img: 'http://picsum.photos/400/123'
		},
		{
			key: 1,
			title: '리엑트',
			content: '전체적인 사이트 구조',
			img: 'http://picsum.photos/400/123'
		},
	],
	db: {
		img: 'http://picsum.photos/500/500',
		explanation: [
			'DB에 대한 설명 1',
			'DB에 대한 설명 1',
			'DB에 대한 설명 1',
			'DB에 대한 설명 1',
			'DB에 대한 설명 1',
		]
	},
	explanation: [
		{
			key: 0,
			title: '로그인 기능',
			why: `기존에는 단순히 '로그인'되는 것에만 초점을 맞춰서 어렵지 않았는데,
			이번 프로젝트에서는 현실에서 로그인을 구현할 떄 반드시 고려해야 하는
			보안에 대해서 고민했어요. 그래서 OAuth나 각종 보안이론에 대해서도
			가볍게 공부했고, Spring Security를 써 보려고 노력했어요`,
			how: `우선, DB에 비밀번호를 직접 저장하지 않는걸 핵심으로 생각했습니다.
			Spring Security에서 제공하는 다양한 암호화 기능을 쓰면 최신
			보안 기법들을 구현할 수 있어요.`,
			relatedPost: [
				{
					num: 5,
					category: {
						img: 'http://picsum.photos/500/500',
						name: '알고리즘',
						type: 'cs'
					},
					title: 'DB에 비밀번호를 저장한다고!? 학원에서나 그러지... 안전한 로그인 기능 구현하기',
					content: '처음 학원에서 로그인을 구현할때 이상한 느낌이 들었습니다. 아니, 비밀번호 같은 민감한 정보를 이렇게 직접 가져와서 비교해도 되는건가?',
					createdDate: '3월 2일'}
			]
		},
		{
			key: 0,
			title: '로그인 기능',
			why: `기존에는 단순히 '로그인'되는 것에만 초점을 맞춰서 어렵지 않았는데,
			이번 프로젝트에서는 현실에서 로그인을 구현할 떄 반드시 고려해야 하는
			보안에 대해서 고민했어요. 그래서 OAuth나 각종 보안이론에 대해서도
			가볍게 공부했고, Spring Security를 써 보려고 노력했어요`,
			how: `우선, DB에 비밀번호를 직접 저장하지 않는걸 핵심으로 생각했습니다.
			Spring Security에서 제공하는 다양한 암호화 기능을 쓰면 최신
			보안 기법들을 구현할 수 있어요.`,
			relatedPost: [
				{
					num: 5,
					category: {
						img: 'http://picsum.photos/500/500',
						name: '알고리즘',
						type: 'cs'
					},
					title: 'DB에 비밀번호를 저장한다고!? 학원에서나 그러지... 안전한 로그인 기능 구현하기',
					content: '처음 학원에서 로그인을 구현할때 이상한 느낌이 들었습니다. 아니, 비밀번호 같은 민감한 정보를 이렇게 직접 가져와서 비교해도 되는건가?',
					createdDate: '3월 2일'}
			]
		},
		{
			key: 0,
			title: '로그인 기능',
			why: `기존에는 단순히 '로그인'되는 것에만 초점을 맞춰서 어렵지 않았는데,
			이번 프로젝트에서는 현실에서 로그인을 구현할 떄 반드시 고려해야 하는
			보안에 대해서 고민했어요. 그래서 OAuth나 각종 보안이론에 대해서도
			가볍게 공부했고, Spring Security를 써 보려고 노력했어요`,
			how: `우선, DB에 비밀번호를 직접 저장하지 않는걸 핵심으로 생각했습니다.
			Spring Security에서 제공하는 다양한 암호화 기능을 쓰면 최신
			보안 기법들을 구현할 수 있어요.`,
			relatedPost: [
				{
					num: 5,
					category: {
						img: 'http://picsum.photos/500/500',
						name: '알고리즘',
						type: 'cs'
					},
					title: 'DB에 비밀번호를 저장한다고!? 학원에서나 그러지... 안전한 로그인 기능 구현하기',
					content: '처음 학원에서 로그인을 구현할때 이상한 느낌이 들었습니다. 아니, 비밀번호 같은 민감한 정보를 이렇게 직접 가져와서 비교해도 되는건가?',
					createdDate: '3월 2일'}
			]
		},
		{
			key: 0,
			title: '로그인 기능',
			why: `기존에는 단순히 '로그인'되는 것에만 초점을 맞춰서 어렵지 않았는데,
			이번 프로젝트에서는 현실에서 로그인을 구현할 떄 반드시 고려해야 하는
			보안에 대해서 고민했어요. 그래서 OAuth나 각종 보안이론에 대해서도
			가볍게 공부했고, Spring Security를 써 보려고 노력했어요`,
			how: `우선, DB에 비밀번호를 직접 저장하지 않는걸 핵심으로 생각했습니다.
			Spring Security에서 제공하는 다양한 암호화 기능을 쓰면 최신
			보안 기법들을 구현할 수 있어요.`,
			relatedPost: [
				{
					num: 5,
					category: {
						img: 'http://picsum.photos/500/500',
						name: '알고리즘',
						type: 'cs'
					},
					title: 'DB에 비밀번호를 저장한다고!? 학원에서나 그러지... 안전한 로그인 기능 구현하기',
					content: '처음 학원에서 로그인을 구현할때 이상한 느낌이 들었습니다. 아니, 비밀번호 같은 민감한 정보를 이렇게 직접 가져와서 비교해도 되는건가?',
					createdDate: '3월 2일'}
			]
		}
	], 
	history: [
		{
			date: '4월 12일',
			content: '기본적인 구조 설계, HTML/CSS 마크업',
			githubLink: 'http://www.naver.com'
		},
		{
			date: '4월 12일',
			content: '기본적인 구조 설계, HTML/CSS 마크업',
			githubLink: 'http://www.naver.com'
		},
		{
			date: '4월 12일',
			content: '기본적인 구조 설계, HTML/CSS 마크업',
			githubLink: 'http://www.naver.com'
		},
		{
			date: '4월 12일',
			content: '기본적인 구조 설계, HTML/CSS 마크업',
			githubLink: 'http://www.naver.com'
		},
		{
			date: '4월 12일',
			content: '기본적인 구조 설계, HTML/CSS 마크업',
			githubLink: 'http://www.naver.com'
		}
	],
	review: [
		`그래도 몇 번 서비스를 만들어 보면서 설계의 중요성을 느꼈는데, 
		이번에는 특히 마감일을 정해놓고 하니깐 애매한 설계로 중간에 코드를 바꿔야 할 일이 너무 많아서
		DevOps에 대해 더욱 더 공부해 보고 싶다고 느꼈습니다`,
		`그래도 몇 번 서비스를 만들어 보면서 설계의 중요성을 느꼈는데, 
		이번에는 특히 마감일을 정해놓고 하니깐 애매한 설계로 중간에 코드를 바꿔야 할 일이 너무 많아서
		DevOps에 대해 더욱 더 공부해 보고 싶다고 느꼈습니다`,
		`그래도 몇 번 서비스를 만들어 보면서 설계의 중요성을 느꼈는데, 
		이번에는 특히 마감일을 정해놓고 하니깐 애매한 설계로 중간에 코드를 바꿔야 할 일이 너무 많아서
		DevOps에 대해 더욱 더 공부해 보고 싶다고 느꼈습니다`,
		`그래도 몇 번 서비스를 만들어 보면서 설계의 중요성을 느꼈는데, 
		이번에는 특히 마감일을 정해놓고 하니깐 애매한 설계로 중간에 코드를 바꿔야 할 일이 너무 많아서
		DevOps에 대해 더욱 더 공부해 보고 싶다고 느꼈습니다`		
	]
  }

  return (
    <div className="card container">
		<Modal.Header closeButton className='text-center'>
            <div className="h1">{portfolio.title}</div>
		</Modal.Header>

        <div className="card-body">
            <div className="card-content">
                <img src={portfolio.image} alt="" style={{height: '400px'}} className='img-fluid w-100'/>

				<div className="row">
					<div className="col-9 col-md-10">
						<div className="h5 mt-3 text-muted ps-5">{portfolio.summary}</div>
					</div>

					<div className="col-3 col-md-2 align-self-center text-center">
						<a className="text-muted h2 me-3" target='_blank' href={portfolio.githubLink}><GithubIcon /></a>
						<a className="text-muted h2" target='_blank' href={portfolio.websiteLink}><LinkIcon /></a>
					</div>
				</div>

                <div className='mt-3'>

                  <div className="row">

                    <div className="col-6">

                      <div className="card">
                        <div className="card-header text-center">
                          개발기간
                        </div>
                        <div className="card-body text-center">
                          {portfolio.startDate} ~ {portfolio.endDate}
                        </div>
                      </div>

                    </div>

                    <div className="col-6">
						<div className="card">
							<div className="card-header text-center">
								개발인원
							</div>
							<div className="card-body text-center">
								{portfolio.developerCount}인
							</div>
						</div>
                    </div>

                  </div>
                </div>

				<div className="mt-3">
					<div className="h2">기능</div>

					<div className="row">
						{
							portfolio.func.map((func) => {
								return(
									<div className="col-12 col-md-6">
										<FunctionCard func={func}/>
									</div>
								)
							})
						}
					</div>

					<MoreButton/>

				</div>

				<div className="mt-3">
					<div className="h2">사용한 기술</div>

					<div className="row">
						{
							portfolio.tech.map((tech) => {
								return(
									<div className="col-4 col-md-3 mb-3">
										<TechIcon tech={tech}/>
									</div>
								)
							})
						}
					</div>
				</div>

				<div className="mt-3">
					<div className="h2">DB 설계</div>
					{
						portfolio.db == null ?
						<div className="h1">
							DB에 대한 설명이 없어요
						</div>
						:
						<div>
							<img src={portfolio.db.img} alt="" className='img-fluid w-100'/>

							<div className="list-group mt-3">
							{
								portfolio.db.explanation.map((ex) => {
									return(
										<div className="list-group-item">
											{ex}
										</div>
									)
								})
							}
							</div>

						</div>
					}

				</div>

				<div className="mt-3">
					<div className="h2">구현설명</div>
					<div className="h5 ps-5 text-muted">프로젝트를 하는 과정에서 특히 어려웠던 부분이나, 인상 깊었던 기능의 구현을 몇 개 소개합니다!</div>

					<div className="row mt-3 mb-3">
						{
							portfolio.explanation == null || portfolio.explanation.length == 0 ?
							<div className="h1">구현 설명이 아직 없어요</div>
							:
							portfolio.explanation.map((ex) => {
								return(
									<ExplanationCard explanation={ex}/>
								)
							})
						}
					</div>

					<MoreButton/>
				</div>


				<div className="mt-3">
					<div className="h2">개발 이력</div>

					{
						portfolio.history == null || portfolio.history.length == 0 ?
							<div className="h1">
								개발이력이 없어요
							</div>
							:

						<div className="list-group mt-3 mb-3">
							{
								portfolio.history.map((his) => {
									return(
										<div className="list-group-item">
											<div className="row">
												<div className="col-2 col-md-3 align-self-center">
													{his.date}
												</div>

												<div className="col-9 col-md-8 align-self-center">
													{his.content}
												</div>

												<div className="col-1 align-self-center text-center">
													<a className="text-muted h2 me-3" target='_blank' href={his.githubLink}><GithubIcon /></a>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					}

					<MoreButton/>
				</div>

				<div className="mt-3 mb-3">
					<div className="h2">느낀점, 배운점</div>

					<div className="list-group mt-3">
						{
							portfolio.review == null || portfolio.review.length == 0 ?
							<div className="h1">후기가 아직 없어요</div>
							:
							portfolio.review.map((re) => {
								return(
									<div className="list-group-item">
										<div className="h5">
											{re}
										</div>
									</div>
								)
							})
						}

					</div>
				</div>

            </div>
        </div>
    </div>
  )
}

const ExplanationCard = ({explanation}) => {
	const {title, why, how, relatedPost} = explanation

	return(
		<div className="col-12 col-md-6 mb-3">
			<div className="card" style={{height: '500px'}}>
				<div className="card-header text-center">
					{title}
				</div>
				<div className="card-body" style={{overflow: 'auto'}}>
					<div className="h5">왜 어려웠어요?</div>
					<p className='text-muted'>
						{why}
					</p>
					<div className="h5">어떻게 구현하셨는지 간단하게 설명해 주세요</div>
					<p className='text-muted'>
						{how}
					</p>

					<div className="h5 mt-5">관련 포스트</div>
					<div className="row">
						{
							relatedPost == null || relatedPost.length == 0 ?
							<div className="h1">관련된 포스트가 없어요</div>
							:
							relatedPost.map((post) => {
								return(
									<Link to={'/blog/' + post.category.type + post.num} className='text-decoration-none'>
										<PostCard
											post={post}
										/>
									</Link>
								)
							}) 
						}
					</div>
				</div>
				<div className="card-footer text-end bg-white">
					<a href="" className='h2 text-dark' target='_blank'><GithubIcon/></a>
				</div>
			</div>
		</div>

	)
}
const FunctionCard = ({func}) => {
	return(
		<div className="card mb-3">
			<div className="card-header text-center">
				{func.title}
			</div>

			<div className="card-body">

				<p>
					{func.content}
				</p>

				<img src={func.img} alt="" className='img-fluid'/>

			</div>
		</div>
	)
}

const TechIcon = ({tech}) => {
    return(
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
    )
}

export default PortfolioDetail