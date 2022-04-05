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
import BlogCard from './components/route/BlogCsTheory';
import Post from './components/route/blog/Post';

// Bootstrap
import { Modal } from 'react-bootstrap'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isBlogOpen, setIsBlogOpen] = useState(false)
	const [blogNum, setBlogNum] = useState(null)

	const closeBlog = () => {
		setIsBlogOpen(false)
	}

	return (
		<div className="App mt-5">
			<Topnav />

			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home setIsBlogOpen={setIsBlogOpen} setBlogNum={setBlogNum} />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/blog/cs" element={<BlogCard />} />
					</Routes>
				</Router>
			</div>

			<Modal
				show={isBlogOpen}
				size='xl'
				style={{ height: '90%' }}
				scrollable={false}
			>
				<Modal.Body>
					<Post blogNum={blogNum} setIsBlogOpen={setIsBlogOpen} />
				</Modal.Body>
			</Modal>

			<Footer setIsLoginOpen={setIsLoginOpen} />

			<Login
				isLoginOpen={isLoginOpen}
				setIsLoginOpen={setIsLoginOpen} />
		</div>
	);
}

export default App;