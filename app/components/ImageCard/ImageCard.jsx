var React = require('react');
var Image = require('Image');
var ImageZoom = require('ImageZoom');
import InputImage from 'InputImage';
var ImageButton = require('ImageButton');
var $ = require('jQuery');

var ImageCard = React.createClass({
  getInitialState: function(){
    return {
      value : {
        x1: 0,
        y1: 0,
        x2:0,
        y2:0,
        x:0,
        y:0
      },
      image:'',
      originalImage:''
    };
  },
  componentDidMount: function(){
    // received from server
  },

  _handleOnButtonClick: function(buttonName){
    console.log(buttonName);
  },
  _handleValue: function(value){
    this.setState({
      value:value
    });
  },

  _sendToServer: function(JSONObj){

  },

  render: function(){
    return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <Image image ={this.state.image}/>
        </div>
        <div className="mdl-cell mdl-cell--2-col">
          <ImageZoom originalImage={this.state.originalImage} onVal = {this._handleValue}/>
          <InputImage onInput = {this.handleInput} value = {this.state.value}/>
        </div>
      </div>
      <div>
        <ImageButton onButtonClick={this._handleOnButtonClick}/>
      </div>
    </div>
    );
  }
});

module.exports = ImageCard;
