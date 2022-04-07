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

// Bootstrap
import { Modal } from 'react-bootstrap'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isBlogOpen, setIsBlogOpen] = useState(false)
	const [blogNum, setBlogNum] = useState(null)

	const [page, setPage] = useState(0)

	const closeBlog = () => {
		setIsBlogOpen(false)
	}

	return (
		<div className="App mt-5">
			<Topnav 
				page={page}
			/>

			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home setIsBlogOpen={setIsBlogOpen} setBlogNum={setBlogNum} setPage={setPage} />} />
						<Route path="/resume" element={<Resume setPage={setPage}/>} />
						<Route path="/portfolio" element={<Portfolio setPage={setPage}/>} />
						<Route path="/blog/cs" element={<BlogCs setPage={setPage}/>} />
						<Route path="/blog/dev" element={<BlogDev setPage={setPage} />} />
						<Route path="/admin" element={<Admin/>}/>
					</Routes>
				</Router>
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

			<Footer setIsLoginOpen={setIsLoginOpen} />

			<Login
				isLoginOpen={isLoginOpen}
				setIsLoginOpen={setIsLoginOpen} />
		</div>
	);
}

export default App;