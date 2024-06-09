import React from 'react'
import { Link } from 'react-router-dom'

const Router: React.FC = () => {
	return (
		<nav
			style={{
				width: '200px',
				height: '100vh',
				background: '#f0f0f0',
				padding: '20px',
			}}>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				<li>
					<Link to='/QR-code'>QR code page</Link>
				</li>
				<li>
					<Link to='/Recipe-page'>Recipe page</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Router
