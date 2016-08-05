var React = require("react");

var LSButtonsRow = React.createClass({
  /* pass back to the parent component that it is clicked */
  buttonSubmit: function(e){
    e.preventDefault();
    var isOn = (e.target.value === "on")? true: false;
    this.props.onPress(isOn);
  },
  render: function(){
    return(
        <div>
        <button name="button" value="on" onClick={this.buttonSubmit} > Turn On </button>
        <button name="button" value="off" onClick={this.buttonSubmit}> Turn Off </button>
      </div>
    );
  }
});

module.exports = LSButtonsRow;
