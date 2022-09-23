import React from 'react'
import Typed from 'react-typed'

export const Header = () => {
	return (
		<div id="home" className="header-wraper mt-5">
			<div className="main-info">
				<h1>Monolithic and Micro-Services Architecture</h1>
				<Typed
					className="typed-text"
					strings={['Scalability', 'Fault tolerance', 'Availabilty ', 'Loose Coupling', 'Tight Coupling']}
					typeSpeed={40}
					backSpeed={60}
					loop
				></Typed>
				<a href="#somthing" className="btn-main-offer">
					Contact Me
				</a>
			</div>
		</div>
	)
}
