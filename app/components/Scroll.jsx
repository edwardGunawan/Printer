var React = require('react');
var InputRange = require('react-input-range')

/* Scroll component */
var Scroll = React.createClass({
  getInitialState: function(){
    return{
      value: 0,
      values:{
        min:0,
        max:3
      }
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
  handleValuesChange: function(component, values){
    this.setState({
      values: values
    });
  },
  inputRange: function(){
    if(this.props.singleRange){
      return(
        <div>
          <input type="range"
            value={this.state.value}
            ref="slider" min={0} max={this.props.max}
            onChange = {this.handleSliderChange}
            />
          <label ref="mask">{this.state.value}</label>
        </div>
      );
    } else {
      return (
        <div>
          <InputRange
              maxValue={this.props.max}
              minValue={0}
              value={this.state.values}
              onChange={this.handleValuesChange.bind(this)}
            />
          <label ref="mask">{(this.state.values.max)-(this.state.values.min)}</label>
        </div>
      );
    }
  },

  render: function() {
    return(
      <form>
        {this.inputRange()}
      </form>
    );
  }
});

module.exports = Scroll;
