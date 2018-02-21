'use strict';

const React = require('react');
const Project = require('./project');

class ProjectPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <Project title = 'Title 1' author = 'Test 1' />
                <Project title = 'Title 1' author = 'Test 2'/>
                <Project title = 'Title 1' author = 'Test 3'/>
            </div>
        );
    }
}

module.exports = ProjectPage;
