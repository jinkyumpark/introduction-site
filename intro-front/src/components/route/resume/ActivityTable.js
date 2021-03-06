import React from 'react'
import Error from '../../common/Error'

import { OverlayTrigger, Popover } from 'react-bootstrap'

const ActivityTable = ({activityData}) => {
	return (
		<>
			<div className="h2 mb-3">λμΈνλ</div>

			<ul className='list-group'>
				{
					activityData == null ?
					<Error/>
					:
					activityData.map((data) => {
						return(
							data.content == null || data.content == '' ?
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
							:
							<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Popover>
									<Popover.Body>
										{data.content}
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