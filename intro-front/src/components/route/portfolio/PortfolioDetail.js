import React from 'react'
import MoreButton from '../../common/MoreButton'
import {BsGithub as GithubIcon, BsLink45Deg as LinkIcon} from 'react-icons/bs'

const PortfolioDetail = () => {
  const portfolio = {
    title: '자기소개 사이트',
    image: 'http://picsum.photos/400/400',
    summary: `
      프로그래머로써의 진로를 처음 결심했을때, 일단 제 자신을 소개하고 표현할 수 있는 사이트를 만들어야 겠다고 결심했습니다.
    `,
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
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
		{
			title: '리엑트',
			img: 'http://picsum.photos/400/123'
		},
	]
  }

  return (
    <div className="card container">
        <div className="card-header text-center">
            <div className="h1">{portfolio.title}</div>
        </div>
        <div className="card-body">
            <div className="card-content">
                <img src={portfolio.image} alt="" style={{height: '400px'}} className='img-fluid w-100'/>

				<div className="row">
					<div className="col-9 col-md-10">
						<div className="h5 mt-3 text-muted ps-5">{portfolio.summary}</div>
					</div>

					<div className="col-3 col-md-2 align-self-center">
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
                          22년 3월 ~ 4월
                        </div>
                      </div>

                    </div>

                    <div className="col-6">
						<div className="card">
							<div className="card-header text-center">
								개발인원
							</div>
							<div className="card-body text-center">
								1인
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
					
					<img src="http://picsum.photos/600/700" alt="" className='img-fluid w-100'/>
				</div>

				<div className="mt-3">
					<div className="h2">구현설명</div>
					<div className="h5 ps-5 text-muted">프로젝트를 하는 과정에서 특히 어려웠던 부분이나, 인상 깊었던 기능의 구현을 몇 개 소개합니다!</div>
				</div>


				<div className="mt-3">
					<div className="h2">개발 이력</div>
					
				</div>

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