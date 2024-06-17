import React from 'react'
import { Link } from 'react-router-dom'

interface link {
	content: string
	path: string
}

const links: link[] = [
	{ content: 'QR code page', path: 'QR-code' },
	{ content: 'Recipe page', path: 'Recipe-page' },
]

const Router: React.FC = () => {
	return (
		<nav>
			<ul className='flex gap-x-2'>
				{links.map((link) => (
					<li className='bg-darkRaspberry rounded-lg p-0 px-4 text-white'>
						<Link to={`/${link.path}`}>{link.content}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Router
