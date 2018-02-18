"use strict";

const React = require('react');

class TeamMember extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 text-center">
                <img className="img-circle img-responsive img-center" src="http://placehold.it/200x200" alt={this.props.name}></img>
                <h3>{this.props.name}</h3>
                <h4><small>{this.props.title}</small></h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

module.exports = TeamMember;
