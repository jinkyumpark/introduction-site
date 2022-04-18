// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// Components
import Topnav from './components/common/Topnav';
import Home from './components/route/Home';
import Footer from './components/common/Footer';
import Login from './components/common/Login';
import Resume from './components/route/Resume';
import Portfolio from './components/route/Portfolio'
import BlogCs from './components/route/BlogCs';
import BlogDev from './components/route/BlogDev'
import Post from './components/route/blog/Post';
import Admin from './components/route/Admin'
import PortfolioDetail from './components/route/portfolio/PortfolioDetail';

// Bootstrap
import { Modal } from 'react-bootstrap'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isBlogOpen, setIsBlogOpen] = useState(false)
	const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
	const [blogNum, setBlogNum] = useState(null)
	const [selectedPortfolioNum, setSelectedPortfolioNum] = useState(null)

	const [page, setPage] = useState(0)

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
					<Topnav 
						page={page}
					/>

					<div className="container">
							<Routes>
								<Route path="/" element={<Home 
															setIsBlogOpen={setIsBlogOpen} 
															setBlogNum={setBlogNum} 
															setPage={setPage} 
															setIsPortfolioOpen={setIsPortfolioOpen}
															setSelectedPortfolioNum={setSelectedPortfolioNum}	
														/>} 
								/>
								<Route path="/resume" element={<Resume setPage={setPage}/>} />
								<Route path="/portfolio" element={<Portfolio 
																	setPage={setPage} 
																	isPortfolioOpen={isPortfolioOpen} 
																	setIsPortfolioOpen={setIsPortfolioOpen}
																	setPortfolioNum={setSelectedPortfolioNum}
																	/>} 
								/>
								<Route path="/blog/cs" element={<BlogCs setPage={setPage}/>} />
								<Route path="/blog/dev" element={<BlogDev setPage={setPage} />} />
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