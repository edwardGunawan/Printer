var React = require('react');
var PropTypes = React.PropTypes;

var TopDrawer = React.createClass({
  // componentDidUpdate: function() {
  //   componentHandler.upgradeDom();
  // },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    );
  }

});

module.exports = TopDrawer;
