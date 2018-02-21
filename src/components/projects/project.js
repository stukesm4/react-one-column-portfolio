'use strict';

const React = require('react');

class Project extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/700x300" alt="" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>{this.props.title}</h3>
                        <h4>{this.props.author}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

module.exports = Project;
