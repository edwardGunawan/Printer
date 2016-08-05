var React = require('react');

/* Scroll component */
var Scroll = React.createClass({
  getInitialState: function(){
    return{
      value: 0
    };
  },

  handleSliderChange: function(e){
		e.preventDefault();
		this.setState({
			value: e.target.value,
		});
    /* if the value is not null then passed back to onChangeValue in ImageBox.jsx
    */
    if(this.state.value){
      this.props.onChangeValue(this.state.value); // pass back the value
    }
		// debugger;
	},

  render: function() {
    return(
      <div>
        <input type="range" value={this.state.value} ref="slider" min="1" max={this.props.max} onChange = {this.handleSliderChange}/>
        <label ref="mask">{this.state.value}</label>
      </div>
    );
  }
});

module.exports = Scroll;
