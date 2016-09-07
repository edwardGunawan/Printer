var React = require('react');
var PropTypes = React.PropTypes;
var MCContent= require('MCContent');
var MCSize = require('MCSize');
var MCButton = require('MCButton');

var MC = React.createClass({
  getInitialState: function(){
    return{
      MCContent: {
        rows: 3,
        columns:4
      },
      updateSize: false,
      MCSize:[
        {
          name: 12,
          rows:3,
          columns:4
        },
        {
          name:24,
          rows:4,
          columns:6
        },
        {
          name:96,
          rows:8,
          columns:12
        }
      ],
      MCButton: [
         {
           button:"arrow_back",
           url:"http://132.239.93.133:216/beta/move_stageDown"
         },
         {
           button:"arrow_downward",
           url:""
         },
         {
           button:"arrow_forward",
           url:""
         },
         {
           button:"arrow_upward",
           url:""
         },
         {
           button:"arrow_drop_down",
           url:""
         },
         {
           button:"arrow_drop_up",
           url:""
         }
       ]
    };
  },


  _handleSize: function(index){
    this.setState({
      MCContent: {
        rows:this.state.MCSize[index].rows,
        columns: this.state.MCSize[index].columns
      },
      updateSize: true
    });
  },
  _handleButton: function(buttonName){
    console.log(buttonName);
  },

  render: function() {
    return (
      <div>
        <div className= "mdl-grid">
          <div style={{margin: "0 auto 1em",
            MozBoxSizing: "borderBox"}} className=" mdl-cell mdl-cell--8-col">
            <MCContent
              MCContent={this.state.MCContent}
              updateSize={this.state.updateSize}
              />
          </div>
          <div className=" mdl-cell--4-col mdl-cell">
            <MCSize MCSize={this.state.MCSize} onSize = {this._handleSize}/>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell--12-col mdl-cell">
            <MCButton MCButton={this.state.MCButton} onButton={this._handleButton}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MC;
