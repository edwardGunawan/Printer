var React = require('react');

var Control = require('Control');
var PrintHistory = require('PrintHistory');
var PendingJobs = require('PendingJobs');
var TopTabs= require('TopTabs');
var PropTypes = React.PropTypes;


var MainTopTabs = React.createClass({
  getInitialState: function(){
    return {
      isActive: 0,
      items : [
        {title: "Control", content:<Control/>},
        {title: "PendingJobs", content:<PendingJobs/>},
        {title: "PrintHistory", content:<PrintHistory/>}
      ]
    };
  },
  // componentDidUpdate: function() {
  //   componentHandler.upgradeDom();
  // },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  handleTabClick: function(currIndex){
    this.setState({currIndex:currIndex});
  },
  render: function() {
    return (
      <div>
        <TopTabs
          active={this.state.isActive}
          items={this.state.items}
          />
      </div>
    );
  }

});

module.exports = MainTopTabs;
