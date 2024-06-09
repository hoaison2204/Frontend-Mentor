import React from 'react'
import { Outlet } from 'react-router-dom'
import Router from './Router/Router'

const MainLayout: React.FC = () => {
	return (
		<div style={{ display: 'flex' }}>
			<Router />
			<div style={{ flex: 1, padding: '20px' }}>
				<Outlet />
			</div>
		</div>
	)
}

export default MainLayout
