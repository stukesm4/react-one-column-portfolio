"use strict";

const React = require('react');

class ContactPage extends React.Component{
    render() {
        return (
            <div className="container">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="control-label col-xs-2">Email</label>
                        <div className="col-xs-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="control-label col-xs-2">Password</label>
                        <div className="col-xs-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-offset-2 col-xs-10">
                            <div className="checkbox">
                                <label><input type="checkbox"></input> Remember me</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-offset-2 col-xs-10">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = ContactPage;
