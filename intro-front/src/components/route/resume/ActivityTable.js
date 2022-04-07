import React from 'react'

const ActivityTable = () => {
	const activityData = [
		{
			title: '운정 큐이엠 학원',
			date: '21년 5월 - 12월',
			content: '중학생 영어 문법, 독해 강의. 시험기간에는 내신 관리'
		},
		{
			title: '교하 차쌤 영어 학원',
			date: '21년 2월 - 6월',
			content: '초등학교, 중학생 듣기, 독해, 문법 관리. 중학생, 고등학생 내신관리'
		},
		{
			title: '대학 수학 튜터링',
			date: '20년 3월 - 5월',
			content: '미적분학, 선형대수학 수강생 대상으로 학교에서 수학 튜터링 제공(영어로)'
		}
	]

	return (
		<ul className='list-group'>
			{
				activityData.map((data) => {
					return(
						<li className="list-group-item">
							<div className="row">
								<div className="col-6 col-md-8">
									{data.title}
								</div>
								<div className="col-6 col-md-4 text-end">
									{data.date}
								</div>
							</div>

							<div className="mt-2 text-muted">
								{data.content}
							</div>

						</li>
					)
				})
			}
		</ul>
	)
}

export default ActivityTable