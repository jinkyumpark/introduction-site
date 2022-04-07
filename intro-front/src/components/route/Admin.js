import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AdminResume from './admin/AdminResume'

const Admin = () => {
    const [selected, setSelected] = useState(-1)
    const categoryData = [
        {
            num: 0,
            name: '이력서'
        },
        {
            num: 1,
            name: '포트폴리오'
        },
        {
            num: 2,
            name: '이론공부'
        },
        {
            num: 3,
            name: '개발공부'
        }
    ]

  return (
    <div>
        <div className="row">
            {
                categoryData.map((category) => {
                    return(
                        <div className="col-3">
                            <NavIcon
                                data={category}  
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    )
                })
            }
        </div>

        <AdminResume/>
    </div>
  )
}

const NavIcon = ({data, selected, setSelected}) => {
    const selectCategory = () => {
        setSelected(data.num);
    }

    return(
        <Button onClick={selectCategory} className={'w-100' + (selected == data.num) && ' active'}>
            {data.name}
        </Button>
    )
}

export default Admin