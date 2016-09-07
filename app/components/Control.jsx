var React = require('react');
var Card = require('Card');
var DMD = require('DMD');
var LS = require('LS');
var MC = require('MC');
var ImageCard = require('ImageCard');
var PropTypes = React.PropTypes;


var Control = React.createClass({
  // componentDidUpdate: function() {
  //   componentHandler.upgradeDom();
  // },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  shouldComponentUpdate: function(nextProps, nextState){
		console.log(nextState.path !== this.state.path);
		return false;
	},
  render: function() {
    return (
      <div>
        <h2> Control Component </h2>
        <div className="mdl-grid">
          <div className=" mdl-cell mdl-cell--6-col mdl-card mdl-shadow--6dp">
            <Card
              title="MC Card"
              content={
                <MC/>
              }
              />
          </div>
          <div className=" mdl-cell--6-col mdl-cell mdl-card mdl-shadow--6dp">
            <Card
              title="LS Card"
              content={
                <LS/>
              }
              />
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell--6-col mdl-cell mdl-card mdl-shadow--6dp">
            <Card
              title="Base"
              content={
                <DMD/>
              }
              />
          </div>
          <div className="mdl-cell--6-col mdl-cell mdl-card mdl-shadow--6dp">
            <Card
              title="Scaffold"
              content={
                <DMD/>
              }
              />
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell--12-col mdl-cell mdl-card mdl-shadow--6dp">
            <Card
              title="Camera Card"
              content={<ImageCard />}
              />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Control;
