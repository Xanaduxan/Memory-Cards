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
	const value = `value = "${foodTotal / 100 * food}"`

	return (
		<div className="progress" >
			<div id="food">
				<span className="progressText">Food</span>
				<progress className="progress-bar" max="100" {...value} />
				<div className='num-container'>
					<span>{foodTotal}</span>
					<span>/</span>
					<span className="foodResult">{food}</span>
				</div>
			</div>
			<div id="travel">
				<span className="progressText">Travel</span>
				<progress className="progress-bar" max="100" {...value} />
				<div className='num-container'>
					<span>{travelTotal}</span>
					<span>/</span>
					<span className="travelResult">{travel}</span>
				</div>
			</div>
			<div id="animals">
				<span className="progressText">Animals</span>
				<progress className="progress-bar" max="100" {...value} />
				<div className='num-container'>
					<span>{animalsTotal}</span>
					<span>/</span>
					<span className="animalsResult">{animals}</span>
				</div>
			</div>
			<div className='resultPic'>
				<img src="/image/photo1668160463.jpeg" alt="" />
			</div>
		</div >
	)
}
module.exports = Progress