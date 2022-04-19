// React
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components
import Topnav from './components/common/Topnav';
import Home from './components/route/Home';
import Footer from './components/common/Footer';
import Login from './components/route/admin/Login';
import Resume from './components/route/Resume';
import Portfolio from './components/route/Portfolio'
import BlogCs from './components/route/BlogCs';
import BlogDev from './components/route/BlogDev'
import Post from './components/route/blog/Post';
import Admin from './components/route/admin/Admin'
import PortfolioDetail from './components/route/portfolio/PortfolioDetail';

// Bootstrap
import { Modal } from 'react-bootstrap'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isBlogOpen, setIsBlogOpen] = useState(false)
	const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
	const [blogNum, setBlogNum] = useState(null)
	const [selectedPortfolioNum, setSelectedPortfolioNum] = useState(null)

	const closeBlog = () => {
		setIsBlogOpen(false)
	}
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
															setIsBlogOpen={setIsBlogOpen} 
															setBlogNum={setBlogNum} 
															setIsPortfolioOpen={setIsPortfolioOpen}
															setSelectedPortfolioNum={setSelectedPortfolioNum}	
														/>} 
								/>
								<Route path="/resume" element={<Resume/>} />
								<Route path="/portfolio" element={<Portfolio 
																	isPortfolioOpen={isPortfolioOpen} 
																	setIsPortfolioOpen={setIsPortfolioOpen}
																	setPortfolioNum={setSelectedPortfolioNum}
																	/>} 
								/>
								<Route path="/blog/cs" element={<BlogCs/>} />
								<Route path="/blog/dev" element={<BlogDev/>} />
								<Route path="/admin" element={<Admin/>}/>
							</Routes>
					</div>

					<Modal
						show={isBlogOpen}
						size='xl'
						style={{ height: '90%' }}
						scrollable={false}
						onHide={closeBlog}
					>
						<Modal.Body>
							<Post blogNum={blogNum} setIsBlogOpen={setIsBlogOpen} />
						</Modal.Body>
					</Modal>

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