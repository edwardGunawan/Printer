var React = require('react');
var Scroll = require('Scroll');

var LSList = React.createClass({
  propTypes: {
    lights: React.PropTypes.array,
    onSliderChange: React.PropTypes.func.isRequired,
    onCheckBox: React.PropTypes.func.isRequired
  },

  _handleChangeValue: function(slider){
      this.props.onSliderChange(slider);
  },
  _handleClick: function(e) {
      this.props.onCheckBox({
        name: e.target.name,
        condition: e.target.checked ? "checked!" : "unchecked!"
      });
  },

  render: function() {
    var lights = this.props.lights.map(function(light) {
      return (
        <li key={light} style={{
            listStyleType: "none"
          }}>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input onClick={this._handleClick} className="mdl-checkbox__input" name={light} type="checkbox"/> {light} </label>
            <Scroll onChangeValue = {this._handleChangeValue} id={light} max={100}/>
        </li>
      );
    }.bind(this));
      return (
          <div>
            <ul>
              {lights}
            </ul>
          </div>
      );
  }
});

module.exports = LSList;
