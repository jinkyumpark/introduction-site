import React from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap'

const ActivityTable = () => {
	const activityData = [
		{
			key: 0,
			title: '운정 큐이엠 학원',
			date: '21년 5월 - 12월',
			content: '중학생 영어 문법, 독해 강의. 시험기간에는 내신 관리',
			desciption: ''
		},
		{
			key: 1,
			title: '교하 차쌤 영어 학원',
			date: '21년 2월 - 6월',
			content: '초등학교, 중학생 듣기, 독해, 문법 관리. 중학생, 고등학생 내신관리',
			desciption: ''
		},
		{
			key: 2,
			title: '대학 수학 튜터링',
			date: '20년 3월 - 5월',
			content: '미적분학, 선형대수학 수강생 대상으로 학교에서 수학 튜터링 제공(영어로)',
			desciption: '현지 학생 대상으로 튜터링 진행했기 때문에 영어로 의사소통하는 능력에 도움이 됐을뿐만 아니라, 수학이라는 어려운 주제를 가르치는 과정에서 소통하는 능력 그 자체가 많이 좋아졌습니다.'
		}
	]

	return (
		<ul className='list-group'>
			{
				activityData.map((data) => {
					return(
						<OverlayTrigger
						key='top'
						placement='top'
						overlay={
							<Popover>
								<Popover.Body>
									{data.desciption}
								</Popover.Body>
							</Popover>
						}
						>
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
					</OverlayTrigger>

					)
				})
			}
		</ul>
	)
}

export default ActivityTable