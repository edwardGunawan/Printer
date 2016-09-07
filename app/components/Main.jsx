var React = require('react');
var DMD = require('DMD');
// var LS = require('LS');
var TopDrawer = require('TopDrawer');
var TopHeader = require('TopHeader');
var TopMain = require('TopMain');


var Main = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function(){
    return (
      <div className='mdl-layout mdl-layout--fixed-header'>
        <TopHeader/>
        <TopDrawer/>
        <TopMain/>
      </div>

    );
  }
});

module.exports = Main;

/*}<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">*/
/*}</div>*/
