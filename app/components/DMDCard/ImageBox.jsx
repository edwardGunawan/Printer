var React = require('react');
var Scroll = require('Scroll');
/* ImageRender page */
var ImageBox = React.createClass({
	PropTypes: {
		dir: React.PropTypes.object.isRequired,
		onImageRender: React.PropTypes.func.isRequired
	},

	/* handle the changes of value from the scroll bar */
	_handleChangeValue: function(result){
		var value = result.value;
		this.props.onImageRender(value)
	},

	render: function(){
		var {dir} = this.props;
		// if the dir is not yet set, set it to 20 else set it to dir.length
		var max = (typeof dir === 'string') ? 20 : dir.length-1;


		return (
				<div clasName="imageRender">
					<div className="maskRange">
						<Scroll max={max} onChangeValue = {this._handleChangeValue} />
					</div>
				</div>
			);
	},
});

module.exports = ImageBox;
