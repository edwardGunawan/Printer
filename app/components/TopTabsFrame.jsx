var React = require('react');
var Nav = require('Nav');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var PendingJobs = require('PendingJobs');
var PrintHistory = require('PrintHistory');
var Control = require('Control');
var MainPrintFrame= require('MainPrintFrame');
var ReactDOM = require('react-dom');

var TopTabsFrame = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function() {
    return (
      <div>

      </div>
    );
  }
});

module.exports = TopTabsFrame;
