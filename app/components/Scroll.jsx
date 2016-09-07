var React = require('react');
var ReactDOM = require('react-dom');
var InputRange = require('react-input-range');

/* Scroll component */
var Scroll = React.createClass({
  propTypes: {
    max: React.PropTypes.number.isRequired,
    onChangeValue: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    position: React.PropTypes.string
  },

  getInitialState: function(){
    return {
      value: 0
    };
  },


  componentDidMount: function(){
    componentHandler.upgradeDom();
    var position = ReactDOM.findDOMNode(this.refs.slider);
    console.log(position);
    if(this.props.position === "vertical"){
      position.style.webkitAppearance = "slider-vertical"
    }
  },

  _handleSliderChange: function(e){
		e.preventDefault();
		this.setState({
			value: e.target.value,
		});
    if(this.state.value){
      this.props.onChangeValue({
        value: this.state.value,
        id: this.props.id
      }); // pass back the value
    }
	},

  render: function() {
    return(
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--10-col">
            <input type="range"
              className="slider-input mdl-slider mdl-js-slider"
              ref="slider" min={0} max={this.props.max}
              onChange = {this._handleSliderChange}
              />
          </div>
          <div className="mdl-cell mdl-cell--2-col">
              <label>{this.state.value}</label>
          </div>
        </div>
    );
  }
});

module.exports = Scroll;
