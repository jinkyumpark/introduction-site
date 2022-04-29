// React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import MoreButton from '../../common/MoreButton'
import PostCard from '../blog/PostCard'
import Loading from '../../common/Loading'
import NoContent from '../blog/NoPost'
import Error from '../../common/Error'

// Library
import {BsGithub as GithubIcon, BsLink45Deg as LinkIcon} from 'react-icons/bs'
import { Modal } from 'react-bootstrap'

const PortfolioDetail = ({selectedPortfolioNum}) => {
	const [portfolio, setPortfolio] = useState(null)
	
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

  useEffect(() => {
	// if(selectedPortfolioNum == null || typeof selectedPortfolioNum == undefined) {
	// 	setIsError(true)
	// 	setIsLoading(false)
	// } else {
	// 	fetch('/api/portfolio/detail/' + selectedPortfolioNum)
	// 		.then((res) => {
	// 			return res.json()
	// 		})
	// 		.then((data) => {
	// 			setPortfolio(data)
	// 		})
	// 		.catch((err) => {
	// 			return err
	// 		})
	// 		.finally(() => {
	// 			setIsLoading(false)
	// 		})
	// }

	fetch('/api/portfolio/detail/21')
		.then((res) => {
			return res.json()
		})
		.then((data) => {
			setPortfolio(data)
		})
		.catch((err) => {
			return err
		})
		.finally(() => {
			setIsLoading(false)
		})
  }, [])

  return (
    <div className="card container">
		{


		isLoading ?
		<Loading/>
		:
		isError ?
		<div style={{marginTop: '100px', marginBottom: '100px'}}>
			<Error/>
		</div>
		:
		

		<>
			<Modal.Header closeButton className='text-center'>
				<div className="h1">{portfolio.title}</div>
			</Modal.Header>

			<div className="card-body">
				<div className="card-content">
					<img src={'/images/' + portfolio.image} alt="" className='img-fluid w-100'/>

					<div className="row">
						<div className="col-9 col-md-10">
							<div className="h5 mt-3 text-muted ps-5">{portfolio.summary}</div>
						</div>

						<div className="col-3 col-md-2 align-self-center text-center mt-3">
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
							{
								portfolio.startDate
									.substring(2, portfolio.startDate.indexOf('T'))
									.replace('-', '년 ')
									.replace('-', '월')
									.concat('일')
							} ~ 
							{	
								portfolio.endDate == null ?
								' (진행중)'
								:
								portfolio.endDate
									.substring(2, portfolio.endDate.indexOf('T'))
									.replace('-', '년 ')
									.replace('-', '월 ')
									.concat('일')
							}
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
								(portfolio.func == null || portfolio.func.length == 0) ?
								<NoContent message='아직 포트폴리오 기능이 없어요'/>
								:
								portfolio.func.map((func) => {
									return(
										<div className="col-12 col-md-6">
											<FunctionCard func={func}/>
										</div>
									)
								})
							}
						</div>
						{
							(portfolio.func == null || portfolio.func.length < 4) ?
							<></>
							:
							<MoreButton/>
						}

					</div>

					<div className="mt-3">
						<div className="h2">사용한 기술</div>

						<div className="row">
							{
								(portfolio.tech == null || portfolio.tech.length == 0) ?
								<NoContent message='사용한 기술이 아직 없어요'/>
								:
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
									(portfolio.db.explanation == null) ?
									<NoContent message='DB에 대한 설명이 아직 없어요'/>
									:
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
		</>


		}
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

				<p style={{height: '150px', overflow: 'auto'}}>
					{func.content}
				</p>

				<img src={'/images/' + func.img} alt="" className='img-fluid'/>

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