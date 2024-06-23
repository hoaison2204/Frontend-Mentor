import React from 'react'
import BlogImage from '../../assets/images/Blog-preview-card/blogimage.png'
import UserPic from '../../assets/images/Blog-preview-card/userpic.png'
const BlogPreviewCard: React.FC = () => {
	return (
		<div className='bg-[#f4d04e] py-40'>
			<div className='card bg-white rounded-2xl m-auto max-w-96 p-6 border border-solid border-[black] shadow-blackBoxShadow'>
				<img
					src={BlogImage}
					alt='Blog Image'
                    className='mb-6'
				/>
				<h3 className='font-bold p-2 px-3 bg-[#f4d04e] inline-block rounded-md mb-4'>Learning</h3>
				<h4 className='mb-4 '>Published 21 Dec 2023</h4>
				<h1 className='font-bold text-28 hover:text-[#f4d04e] hover:cursor-pointer'>HTML & CSS foundations</h1>
				<span className='text-[gray] mb-4 inline-block'>
					These languages are the backbone of every website, defining structure,
					content, and presentation.
				</span>
				<div className='flex gap-x-2 items-center'>
					<img
						src={UserPic}
						alt='User picture'
					/>
					<h1>Greg Hooper</h1>
				</div>
			</div>
		</div>
	)
}

export default BlogPreviewCard
