'use strict';

const React = require('react');
const Router = require('react-router');

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/about/aboutPage')} />
    <Route name='about' handler={require('./components/about/aboutPage')} />
    <Route name='projects' handler={require('./components/projects/projectPage')} />
    <Route name='services' handler={require('./components/services/servicePage')} />
    <Route name='contact' handler={require('./components/contact/contactPage')} />
  </Route>
);

module.exports = routes;
