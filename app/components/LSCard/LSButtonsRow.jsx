var React = require("react");

var LSButtonsRow = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func.isRequired
  },

  /* pass back to the parent component that it is clicked */
  _buttonSubmit: function(buttonName){
    return () => {
      this.props.onPress(buttonName);
    }
  },
  render: function(){
    return(
        <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" name="on" onClick={this._buttonSubmit('on')} > Turn On </button>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" name="off" onClick={this._buttonSubmit('off')}> Turn Off </button>
      </div>
    );
  }
});

module.exports = LSButtonsRow;
