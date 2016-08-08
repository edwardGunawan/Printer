var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({

  render: function() {
    return (
      <div>
        <h2> Nav Component </h2>
        <ul>
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Control </IndexLink></li>
          <li><Link to="/PendingJobs" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Pending Job </Link></li>
          <li><Link to="/PrintHistory" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Print History </Link></li>
        </ul>
      </div>
    );
  }

});

module.exports = Nav;
