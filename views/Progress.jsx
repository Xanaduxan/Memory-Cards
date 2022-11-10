const React = require('react')

const Progress = ({ result, allCards }) => {
	const cardsCounter = (topic) => { allCards.filter((card) => topic === card.topicId).length }
	const userProgress = (topic) => { result.filter((card) => topic === card.topicId && card.result).length }
	const food = allCards.filter((card) => 1 === card.topicId).length
	const travel = allCards.filter((card) => 2 === card.topicId).length
	const animals = allCards.filter((card) => 3 === card.topicId).length
	const foodTotal = result.filter((card) => 1 === card.topicId).length
	const travelTotal = result.filter((card) => 2 === card.topicId).length
	const animalsTotal = result.filter((card) => 3 === card.topicId).length
	console.log(food, travel, animals);

	return (
		<div className="progress" >
			<div id='1'>
				<span className=''>Food </span>
				<span className=''>{foodTotal}</span>
				<span className=''>/</span>
				<span className='1'>{food}</span>
			</div>
			<div id='2'>
				<span className=''>Travel </span>
				<span className=''>{travelTotal}</span>
				<span className=''>/</span>
				<span className='2'>{travel}</span>
			</div>
			<div id='2'>
				<span className=''>Animals </span>
				<span className=''>{animalsTotal}</span>
				<span className=''>/</span>
				<span className='3'>{animals}</span>
			</div>
		</div >
	)
}
module.exports = Progress