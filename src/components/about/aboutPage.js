"use strict";

const React = require('react');
const Team = require('./team');

class AboutPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">About Us 
                            <small> Its Nice to Meet You!</small>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
                    </div>
                </div>

                <Team />

                <hr />
            </div>
        );
    }
}

module.exports = AboutPage;
