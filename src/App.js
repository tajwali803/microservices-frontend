import React, { useEffect } from 'react'
import { createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AboutMe } from './components/AboutMe'
import { Services } from './components/Services'
export const AuthContext = createContext()
// var loadbalancer = require('./load-balancing-test')
function App() {
	const [isAuth, setIsAuth] = React.useState(false)
	const [userId, setUserId] = React.useState(null)

	useEffect(() => {
		const user_id = localStorage.getItem('user_id')
		if (user_id) {
			setIsAuth(true)
			setUserId(user_id)
		}
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, userId, setUserId, setIsAuth }}>
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
			<Footer />
		</AuthContext.Provider>
	)
}

export default App
