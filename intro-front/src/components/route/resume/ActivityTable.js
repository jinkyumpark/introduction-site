import React from 'react'

const ActivityTable = () => {
	return (
		<ul className='list-group'>
			<li className="list-group-item">
				<div className="row">
					<div className="col-8">
						운정 큐이엠 영어 학원
					</div>
					<div className="col-4">
						2021년 5월 - 12월
					</div>
				</div>

				<div className="mt-2 text-muted">
					중학생 영어 문법, 독해 강의. 시험기간에는 내신 관리
				</div>

			</li>
			<li className="list-group-item">
				<div className="row">
					<div className="col-8">
						교하 차쌤 영어 학원
					</div>
					<div className="col-4">
						2021년 2월 - 6월
					</div>
				</div>

				<div className="mt-2 text-muted">
					초등학교, 중학생 듣기, 독해, 문법 관리.
					중학생, 고등학생 내신관리
				</div>

			</li>
			<li className="list-group-item">
				<div className="row">
					<div className="col-8">
						대학 수학 튜터링
					</div>
					<div className="col-4">
						2020년 3월 - 5월
					</div>
				</div>

				<div className="mt-2 text-muted">
					미적분학, 선형대수학 수강생 대상으로 학교에서 수학 튜터링 제공(영어로)
				</div>

			</li>
		</ul>
	)
}

export default ActivityTable