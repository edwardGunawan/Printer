var React = require('react');
var PropTypes = React.PropTypes;
var MainTopTabs = require('MainTopTabs');
var MainPrintFrame = require('MainPrintFrame');
var DMD = require('DMD');
var TopMain = React.createClass({
  // componentDidUpdate: function() {
  //   componentHandler.upgradeDom();
  // },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function() {
    return (
      <main className="mdl-layout_content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col"><MainPrintFrame/></div>
            <div className="mdl-cell mdl-cell--8-col">
              <DMD/>
              {/*}<MainTopTabs/>*/}
            </div>
          </div>
        </div>
      </main>
    );
  }

});

module.exports = TopMain;
