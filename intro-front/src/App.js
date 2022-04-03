// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
// Components
import Topnav from './components/common/Topnav';
import Home from './components/route/Home';
import Footer from './components/common/Footer';
import Login from './components/common/Login';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal} from 'react-bootstrap'
// Icon

// Resources
import './common.css'

function App() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)

	return (
		<div className="App">
			<Topnav/>

			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home/>}/>
					</Routes>
				</Router>
			</div>

			<Footer setIsLoginOpen={setIsLoginOpen}/>

			<Login 
			isLoginOpen={isLoginOpen}
			setIsLoginOpen={setIsLoginOpen}/>
		</div>
	);
}

export default App;
