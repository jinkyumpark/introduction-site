import React from 'react'

const PortfolioDetail = () => {
  const portfolio = {
    title: '자기소개 사이트',
    image: 'http://picsum.photos/400/400',
    summary: `
      프로그래머로써의 진로를 처음 결심했을때, 일단 제 자신을 소개하고 표현할 수 있는 사이트를 만들어야 겠다고 결심했습니다.
    `
  }

  return (
    <div className="card vh-100">
        <div className="card-header text-center">
            <div className="h1">{portfolio.title}</div>
        </div>
        <div className="card-body">
            <div className="card-content">
                <img src={portfolio.image} alt="" style={{height: '400px'}} className='img-fluid w-100'/>


                <div className="h5 mt-3 text-muted ps-5">{portfolio.summary}</div>

                <div>
                  <div className="h2">기본적인 정보</div>

                  <div className="row">

                    <div className="col-4">
                      개발기간
                    </div>
                    <div className="col-8">
                      22년 3월 ~ 22년 4월
                    </div>

                    <div className="row">
                      <div className="col-4">
                        개발인원
                      </div>
                      <div className="col-8">
                        1인
                      </div>
                    </div>

                  </div>

                </div>

                <div className="h2">기능</div>

                <div className="h2">사용한 기술</div>

                <div className="h2">기획서 / 계획서</div>

                <div className="h2"></div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioDetail