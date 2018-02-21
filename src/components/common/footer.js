'use strict';

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright © Your Website 2018</p>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
