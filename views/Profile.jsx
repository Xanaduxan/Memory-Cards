const React = require('react')
const Layout = require('./Layout')
const NewCard = require('./NewCard')
const Header = require('./Header')
const Progress = require('./Progress')

const Profile = ({ result, user, allCards }) => {
	return (
		<Layout user={user}>
			<div>
				<Progress result={result} allCards={allCards} />
				<NewCard />
			</div>
		</Layout>
	)
}

module.exports = Profile