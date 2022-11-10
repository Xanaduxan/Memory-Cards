const React = require('react')

const NewCard = ({ title }) => {
	return (
		<form className="addForm" method="POST" action="/profile">
			<div className="mb-3">
				<label htmlFor="exampleInputTopic" className="form-label">Тема</label>
				<select name='topic'>
					<option value="1">Food</option>
					<option value="2">Travel</option>
					<option value="3">Animals</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputWord2" className="form-label">Слово на русском</label>
				<input required type="text" name="russian" className="form-control" id="russianWord" aria-describedby="emailHelp" />
			</div>

			<div className="mb-3">
				<label htmlFor="exampleInputWord2" className="form-label">Перевод слова на английский</label>
				<input required type="text" name="english" className="form-control" id="englishWord" />
			</div>


			<div id="addCard" />
			<button type="submit" className="btn btn-primary">Добавить</button>
		</form>
	)
}

module.exports = NewCard