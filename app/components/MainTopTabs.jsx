var React = require('react');
var Nav= require('Nav');
var PropTypes = React.PropTypes;


var MainTopTabs = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },

  render: function() {
    return (
      <div>
        <Nav/>
        <h2> Main Component </h2>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = MainTopTabs;
