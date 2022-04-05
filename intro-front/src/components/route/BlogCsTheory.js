import React from 'react'
import algo from '../../images/cs-algo.png'
import ClassificationIcon from './blog/ClassificationIcon'

const BlogCsTheory = () => {
    const classificationData = [
        {
            name: "알고리즘",
            icon: 1
        },
        {
            name: "데이터구조",
            icon: 2
        },
        {
            name: "네트워크",
            icon: 3
        },
        {
            name: "데이터베이스",
            icon: 4
        },
        {
            name: "컴퓨테이션 이론",
            icon: 5
        },
        {
            name: "운영체제",
            icon: 6
        }
    ]

    return (
        <div>
            <div className="h1">컴퓨터 과학 이론</div>

            <div className="row">
                {
                    classificationData.map((data) => {
                        return (
                            <div className="col-4 col-md-2">
                                <ClassificationIcon
                                    data={data}
                                />
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}


export default BlogCsTheory