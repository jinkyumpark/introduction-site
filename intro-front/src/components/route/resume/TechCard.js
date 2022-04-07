import React, {useState} from 'react'
import reactIcon from '../../../images/tech-icon/reactjs-icon.png'
import { MdOutlineDoNotDisturb as ErrorIcon } from 'react-icons/md'


const TechCard = ({ tech }) => {
    const { name, img, summary } = tech
    const [section, setSection] = useState(0);

    return (
        <div className="card mt-3">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 0 ? ' active' : '')} onClick={() => setSection(0)}>소개</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 1 ? ' active' : '')} onClick={() => setSection(1)}>포트폴리오</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link" + (section == 2 ? ' active' : '')} onClick={() => setSection(2)}>포스트</button>
                    </li>
                </ul>
            </div>


            <div className="card-body">
            <div className="row">
                <div className="col-12 col-md-2 align-self-center">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-12">
                            <img src={require('../../../images/tech-icon/' + img)} alt="React Icon" style={{ width: '75px' }} className='w-100' />
                        </div>
                    </div>
                    <div className="h3 text-center">{name}</div>
                </div>

                {
                    section == 0 ?
                    <IntroSection tech={tech}/> :
                    section == 1 ?
                    <PortfolioSection/> :
                    <PostSection/>
                }

            </div>
        </div>



        </div>
    )
}

const IntroSection = ({tech}) => {
    const { name, img, summary } = tech

    return(
        <div className="col align-self-center">
        <ul className="list-group list-group-flush">
            <li className="list-group-item p-3">{summary.sum1}</li>
            <li className="list-group-item p-3">{summary.sum2}</li>
            <li className="list-group-item p-3">{summary.sum3}</li>
        </ul>
    </div>
)
}

const PortfolioSection = () => {
    return(
        <div className='col align-self-center'>
            <div className="row">
                <ErrorIcon className='text-danger mb-3' size='100'/>
            </div>
            <div className="row">
                <div className="h5 text-center">
                    React를 사용한 포트폴리오가 없어요
                </div>
            </div>
        </div>
    )
}

const PostSection = () => {
    return(
        <div className='col align-self-center'>
            <div className="row">
                <ErrorIcon className='text-danger mb-3' size='100'/>
            </div>
            <div className="row">
                <div className="h5 text-center">
                    React와 관련된 포스트가 없어요
                </div>
            </div>
        </div>
    )
}

export default TechCard