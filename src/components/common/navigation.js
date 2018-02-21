'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;


class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            {/* <li>
                                <Link to="/services">Services</Link>
                            </li> */}
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                      </ul>
                  </div>
              </div>
          </nav>
        );
    }
}

module.exports = Navigation;
