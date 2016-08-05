var React = require('react');
var Scroll = require('Scroll');
/* ImageRender page */
var ImageBox = React.createClass({
	getInitialState: function(){
		return {
			img: this.props.dir
		};
	},

	/* handle the changes of value from the scroll bar */
	handleChangeValue: function(value){
		/* change the img through the value */
		this.setState({
			img: this.props.dir[value-1].webkitRelativePath
		});
	},

	render: function(){
		var fileList = this.props.dir;
		var max;

		/* initially it is passed on a string */
		if(typeof fileList === 'string'){
			max = 20; // initialized the max
		} else {
			/* getting max value on the input range */
			max = fileList.length;
		}

		// console.log(typeof this.props.dir);
		// console.dir(this.props.dir);
		// debugger;
		return (
				<div clasName="imageRender">
					<div className="image">
						<img src={this.state.img} alt="My Image" />
					</div>
					<div className="maskRange">
						<Scroll onChangeValue = {this.handleChangeValue} max={max}/>
					</div>
				</div>
			);
	},
});

module.exports = ImageBox;
