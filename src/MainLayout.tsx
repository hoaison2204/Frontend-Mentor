import React from 'react'
import { Outlet } from 'react-router-dom'
import Router from './Router/Router'

const MainLayout: React.FC = () => {
	return (
		<div className='flex flex-col'>
			<Router />
			<div className='content-container'>
				<Outlet />
			</div>
		</div>
	)
}

export default MainLayout
