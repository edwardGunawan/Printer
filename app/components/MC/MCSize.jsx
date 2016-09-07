var React = require('react');
var PropTypes = React.PropTypes;

var MCSize = React.createClass({
  propTypes: {
    MCSize: PropTypes.array.isRequired,
    onSize: PropTypes.func.isRequired
  },

  _handleClick: function(e){
    this.props.onSize(e.target.value);
  },

  render: function() {
    var radioButton = this.props.MCSize.map((button,i)=>{
      return(
        <li key={i} style={{
            listStyleType: "none"
          }}>
          <label className="mdl-radio mdl-js-radio">
            <input type="radio" onClick={this._handleClick} value={i} name="size" className="mdl-radio__button"/>
            <span className="mdl-radio__label">{button.name}</span>
          </label>
        </li>
      )
    });
    return (
      <div>
        <ul>
          {radioButton}
        </ul>
      </div>

    );
  }

});

module.exports = MCSize;
