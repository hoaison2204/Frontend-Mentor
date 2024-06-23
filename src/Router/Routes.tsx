import { createHashRouter } from 'react-router-dom'
import MainLayout from '../MainLayout'
import QRCode from '../components/QR-code/QRCode'
import RecipePage from '../components/RecipePage/RecipePage'
import BlogPreviewCard from '../components/Blog-preview-card/Blog-preview-card'

const Routes = createHashRouter([
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
			{
				path: 'blog-preview-card',
				element: <BlogPreviewCard />
			}
		],
	},
])

export default Routes
