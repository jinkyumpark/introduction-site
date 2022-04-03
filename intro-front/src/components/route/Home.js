import React from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import PortfolioCard from './home/PortfolioCard'
import Profile from './home/Profile'
import CsCard from './home/CsCard'
import MoreButton from './home/MoreButton'
// Icons
// Resources
import './home/homeStyle.css'

const Home = () => {
        const portfolioData = [
        {
            img: 'http://picsum.photos/400/200',
            title: 'Portfolio 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 1
        },
        {
            img: 'http://picsum.photos/400/200/',
            title: 'Portfolio 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            img: 'http://picsum.photos/400/200//',
            title: 'Portfolio 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            img: 'http://picsum.photos/400/200///',
            title: 'Portfolio 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 3
        }
    ]

    return (

    <div className='container'>
        <Profile/>

        <div className='mb-5'>
            <div className="h1 mb-3">포트폴리오 </div>

            <div className="row">
                {
                    portfolioData.map((data) => {
                        return(
                            <div className="col-12 col-md-6">
                                <PortfolioCard portfolio={data}/>
                            </div>
                        )
                    })
                }
            </div>
        
            <MoreButton/>
        </div>

        <div className="mb-5">
            <div className="h1">CS 이론 공부</div>
            
            <CsCard/>
            <CsCard/>
            <CsCard/>
            <CsCard/>

            <MoreButton/>
        </div>

        <div className="mb-5">
            <div className="h1">개발 실무 공부</div>

            <CsCard/>

            <MoreButton/>
        </div>

    </div>
  )
}

export default Home