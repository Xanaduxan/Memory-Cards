const React = require('react')
const Layout = require('./Layout')
const NewCard = require('./NewCard')
const Header = require('./Header')
const Progress = require('./Progress')

const Profile = ({ title }) => {
	return (
		<Layout title={title}>
			<div>
				<Progress />
				<NewCard />
			</div>
		</Layout>
	)
}

module.exports = Profile