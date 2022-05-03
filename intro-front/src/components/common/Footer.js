import React from 'react'
import { BsGithub as GithubIcon, BsLinkedin as LinkedinIcon } from 'react-icons/bs'
import { RiAdminLine as AdminIcon } from 'react-icons/ri'

const Footer = ({ setIsLoginOpen }) => {
	const openLogin = () => {
		setIsLoginOpen(true)
	}

	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<div className="col-6 col-md-4 d-flex align-items-center ms-3">
				<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
				</a>
				<span class="text-muted">© 박진겸 <br/> 22년 4월 3일에 마지막으로 업데이트 됨</span>
			</div>

			<ul class="nav col-5 col-md-4 justify-content-end list-unstyled d-flex me-3">
				<li className="ms-3"><a className="text-muted h2" target='_blank' href="https://github.com/jinkyumpark"><GithubIcon /></a></li>
				<li className="ms-3"><a className="text-muted h2" target='_blank' href="https://www.linkedin.com/in/jinkyum-park/"><LinkedinIcon /></a></li>
				<li className="ms-3"><a className="text-muted h2" onClick={openLogin}><AdminIcon /></a></li>
			</ul>
		</footer>
	)
}

export default Footer