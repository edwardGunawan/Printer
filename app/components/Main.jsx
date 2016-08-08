var React = require('react');
// var DMD = require('DMD');
// var LS = require('LS');
var MainPrintFrame = require('MainPrintFrame');
var TopTabsFrame = require('TopTabsFrame');
var MainTopTabs = require('MainTopTabs');

var Main = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function(){
    return (
      <div>
        <main className="mdl-layout_content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--4-col">{/* PRINT BUTTONS */}</div>
              <div className="mdl-cell mdl-cell--2-col"><MainPrintFrame/></div>
              <div className="mdl-cell mdl-cell--4-col"><MainTopTabs/></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
});

module.exports = Main;
