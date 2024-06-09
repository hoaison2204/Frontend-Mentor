import React from 'react'
import image from '../assets/qr-code.png'

interface QRCodeComponentProps {
	heading: string
	description: string
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({
	heading,
	description,
}) => {
	return (
		<div className='bg-lightGray flex justify-center py-[150px]'>
			<div className='mx-4 max-w-80 p-4 bg-white rounded-[20px] drop-shadow-base'>
				<img
					src={image}
					alt='qr-code'
					className='rounded-[20px] mb-6'
				/>
				<h3 className='font-bold normal-case text-center text-heading mb-4'>
					{heading}
				</h3>
				<span className='text-grayishBlue normal-case block text-center text-paragraph'>
					{description}
				</span>
			</div>
		</div>
	)
}

export default QRCodeComponent
