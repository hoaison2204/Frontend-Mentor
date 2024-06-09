import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout'
import QRCode from '../components/QR-code/QRCode'
import RecipePage from '../components/RecipePage/RecipePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: 'QR-code',
				element: <QRCode />,
			},
			{
				path: 'Recipe-page',
				element: <RecipePage />,
			},
		],
	},
])

export default router
