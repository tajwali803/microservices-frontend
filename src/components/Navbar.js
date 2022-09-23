import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-scroll'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg  navbar-light bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img className="logo" src={logo} alt="logo..."></img>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link smooth={true} to="home" duration={100} className="nav-link" aria-current="page" href="#">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="about" offset={-110} duration={100} className="nav-link" href="#">
								about me
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="services" offset={-110} duration={100} className="nav-link" href="#">
								services
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="home2" offset={-110} duration={100} className="nav-link" href="#">
								Create Post
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link smooth={true} offset={-110} className="nav-link" href="../pages/login">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">
								Sign Up
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	)
}
