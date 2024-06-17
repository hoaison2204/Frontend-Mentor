import React from 'react'
import image from '../../assets/images/RecipePage/image-omelette.jpeg'
import './Style.css'

interface Nutrition {
	name: string
	value: number
}

const nutrition: Nutrition[] = [
	{
		name: 'Calories',
		value: 277,
	},
	{
		name: 'Carbs',
		value: 0,
	},
	{
		name: 'Protein',
		value: 20,
	},
	{
		name: 'Fat',
		value: 22,
	},
]

const RecipePage: React.FC = () => {
	return (
		<div className='bg-eggshell py-32 font-youngSerif'>
			<div className='main-content max-w-[600px] flex flex-col m-0 mx-auto bg-white p-9 rounded-[20px]'>
				<div className='flex justify-center mb-7'>
					<img
						src={image}
						alt='omelette'
						className='rounded-2xl'
					/>
				</div>
				<div>
					<h2 className='text-[32px] font-youngSerif mb-4'>
						Simple Omelette Recipe
					</h2>
					<span className='text-13 block text-justify mb-5 text-wengeBrown'>
						An easy and quick dish, perfect for any meal. This classic omelette
						combines beaten eggs cooked to perfection, optionally filled with
						your choice of cheese, vegetables, or meats.
					</span>
				</div>
				<div className='bg-roseWhite p-5 rounded-2xl mb-5'>
					<h3 className='text-darkRaspberry font-bold text-paragraph mb-4'>
						Preparation time
					</h3>
					<ul className='list-disc pl-6 text-wengeBrown leading-7 bullet-darkRaspberry-color'>
						<li>
							<b>Total: </b>Approximately 10 minutes
						</li>
						<li>
							<b>Preparation: </b>5 minutes
						</li>
						<li>
							<b>Cooking: </b>5 minutes
						</li>
					</ul>
				</div>
				<div>
					<h2 className='font-youngSerif text-32 text-nutmeg'>Ingredients</h2>
					<ul className='pl-6 list-disc bullet-nutmeg-color [&>*]:text-13 [&>*]:pl-5 text-wengeBrown leading-7 mb-5'>
						<li>2-3 large eggs</li>
						<li>Salt, to taste</li>
						<li>Pepper, to taste</li>
						<li>1 tablespoon of butter or oil</li>
						<li>
							Optional fillings: cheese, diced vegetables, cooked meats, herbs
						</li>
					</ul>
					<hr className='text-wengeBrown mb-5' />
				</div>
				<div>
					<h2 className='font-youngSerif text-32 text-nutmeg mb-5'>
						Instructions
					</h2>
					<ul className='list-decimal pl-6 bullet-nutmeg-color text-wengeBrown leading-7 mb-5 [&>*]:pl-5 [&>*]:text-13'>
						<li>
							<b>Beat the eggs: </b> In a bowl, beat the eggs with a pinch of
							salt and pepper until they are well mixed. You can add a
							tablespoon of water or milk for a fluffier texture.
						</li>
						<li>
							<b>heat the pan: </b> Place a non-stick frying pan over medium
							heat and add butter or old.
						</li>
						<li>
							<b>Cook the omelette: </b> Once the butter is melted and bubbling,
							pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
							surface.
						</li>
						<li>
							<b>Add fillings (Optional): </b>When the eggs begin to set at the
							edges but are still slightly runny in the middle, sprinkle your
							chosen fillings over one half of the omelette.
						</li>
						<li>
							<b>Fold and serve: </b>As the omelette continues to cook,
							carefully lift one edge and fold it over the fillings. Let it cook
							for another minute, then slide it onto a plate.
						</li>
						<li>
							<b>Enjoy: </b>Serve hot, with additional salt and pepper if
							needed.
						</li>
					</ul>
					<hr className='text-wengeBrown mb-5' />
				</div>
				<div>
					<h2 className='font-youngSerif text-32 text-nutmeg mb-5'>
						Nutrition
					</h2>
					<span className='text-13 text-wengeBrown block mb-4'>
						The table below shows nutritional values per serving without the
						additional fillings.
					</span>
					<table className='w-full text-13 text-wengeBrown'>
						<tr>
							<td className='w-1/2 py-2'>{nutrition[0].name}</td>
							<td className='font-bold text-nutmeg py-2'>{nutrition[0].value}kcal</td>
						</tr>
						{nutrition.slice(1).map((nutrition) => (
							<tr className='border-t-[1px] backdrop:p-0 py-2'>
								<td className='w-1/2 py-2'>{nutrition.name}</td>
								<td className='font-bold text-nutmeg py-2'>{nutrition.value}g</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</div>
	)
}

export default RecipePage
