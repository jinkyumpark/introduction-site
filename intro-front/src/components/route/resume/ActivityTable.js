import React from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap'

const ActivityTable = ({activityData}) => {
	return (
		<>
			<div className="h2 mb-3">대외활동</div>

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
		</>
	)
}

export default ActivityTable