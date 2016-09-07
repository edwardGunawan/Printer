var React = require('react');
var LSList = require('LSList');
var LSButtonsRow = require('LSButtonsRow');

var LS = React.createClass({
  getInitialState: function(){
    return {
      lights: ["UV", "Blue", "Green"]
    };
  },

  _handleSliderChange: function(slider){
    console.log(slider.id + ": "+ slider.value);
  },
  _handleCheckBox: function(checkBox) {
    console.log(checkBox.name + "is" + checkBox.condition);
  },
  /* after the user clicked on the on or off button */
  _handleOnPress: function(buttonName){
    console.log(buttonName + " is clicked!");
  },
  
  render: function() {
    return (
      <div>
        <LSList lights={this.state.lights} onSliderChange={this._handleSliderChange} onCheckBox={this._handleCheckBox} />
        <LSButtonsRow onPress = {this._handleOnPress}/>
      </div>
    );
  }
});

module.exports = LS;
