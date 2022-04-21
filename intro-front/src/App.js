// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Components
import Topnav from './components/common/Topnav';
import Footer from './components/common/Footer';

import Login from './components/route/admin/Login';
import Admin from './components/route/admin/Admin'

import Home from './components/route/home/Home';
import Resume from './components/route/resume/Resume';
import Portfolio from './components/route/portfolio/Portfolio'
import BlogCs from './components/route/blog/BlogCs';
import BlogDev from './components/route/blog/BlogDev'

import Post from './components/route/blog/Post';
import PortfolioDetail from './components/route/portfolio/PortfolioDetail';

// Bootstrap
import { Modal } from 'react-bootstrap'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
	const [selectedPortfolioNum, setSelectedPortfolioNum] = useState(null)

	const closePortfolio = () => {
		setIsPortfolioOpen(false)
	}

	return (
			<>
			<Router>
				<div className="App mt-5">
					<Topnav/>

					<div className="container">
							<Routes>
								<Route path="/" element={<Home 
															setIsPortfolioOpen={setIsPortfolioOpen}
															setSelectedPortfolioNum={setSelectedPortfolioNum}	
														/>} 
								/>
								<Route path="/resume" element={<Resume
																	setIsPortfolioOpen={setIsPortfolioOpen}
																	setSelectedPortfolioNu={setSelectedPortfolioNum}
								/>} />
								<Route path="/portfolio" element={<Portfolio 
																	isPortfolioOpen={isPortfolioOpen} 
																	setIsPortfolioOpen={setIsPortfolioOpen}
																	setPortfolioNum={setSelectedPortfolioNum}
																	/>} 
								/>
								<Route path="/blog/cs" element={<BlogCs/>} />
								<Route path="/blog/dev" element={<BlogDev/>} />
								<Route path="/admin" element={<Admin/>}/>
								<Route path='/blog/post/:num' element={<Post/>}/>
							</Routes>
					</div>

					<Login
						isLoginOpen={isLoginOpen}
						setIsLoginOpen={setIsLoginOpen} />

					<Modal
						show={isPortfolioOpen}
						size='xl'
						style={{ minHeight: '90vh'}}
						scrollable={false}
						onHide={closePortfolio}
					>
						<PortfolioDetail
							portfolioNum={selectedPortfolioNum}
							style={{ minHeight: '90vh'}}
						/>
					</Modal>

					<Footer setIsLoginOpen={setIsLoginOpen} />
				</div>
			</Router>
		</>
	);
}

export default App;