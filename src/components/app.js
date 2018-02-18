const React = require('react');
const RouteHandler = require('react-router').RouteHandler;

const Navigation = require('./common/navigation.js');
const Footer = require('./common/footer.js');

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Navigation />
				<div className="container-fluid">
					<RouteHandler/>
				</div>
				<Footer />
			</div>
		);
	}
}

module.exports = App;
