var React = require('react');
var PropTypes = React.PropTypes;

var ImageButton = React.createClass({
  propTypes: {
    onButtonClick: PropTypes.func.isRequired
  },

  _handleClick: function(button){
    return () => {
      this.props.onButtonClick(button);
    }
  },

  render: function() {
    return (
      <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._handleClick('On')}> On Camera </button>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._handleClick('Off')}> Off Camera </button>
      </div>
    );
  }

});

module.exports = ImageButton;
