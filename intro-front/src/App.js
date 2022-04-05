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
import BlogCsTheory from './components/route/BlogCsTheory';

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)

	return (
		<div className="App mt-5">
			<Topnav />

			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/blog/cs" element={<BlogCsTheory />} />
					</Routes>
				</Router>
			</div>

			<Footer setIsLoginOpen={setIsLoginOpen} />

			<Login
				isLoginOpen={isLoginOpen}
				setIsLoginOpen={setIsLoginOpen} />
		</div>
	);
}

export default App;