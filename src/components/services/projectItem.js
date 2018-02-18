"use strict";

const React = require('react');

class ProjectItem extends React.Component {
    render() {
        return (
            <div className="col-sm-3 col-xs-6">
                <a href="#">
                    <img className="img-responsive portfolio-item" src={this.props.source} alt=""></img>
                </a>
            </div>
        );
    }
}

module.exports = ProjectItem;