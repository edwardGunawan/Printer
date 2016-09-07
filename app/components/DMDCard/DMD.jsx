/* DMD image */
var React = require('react');
var InputBox = require('InputBox');
var ImageBox = require('ImageBox');
var ImageRender = require('ImageRender');

var DMD = React.createClass({
	getInitialState: function(){
		/* set the initial state directory */
		return {
			dir:"./imageSample"
		};
	},

	_handleImageRender: function(value){
		/* change the img through the value */
		this.setState({
			imageRender: this.state.dir[value].webkitRelativePath
		});
	},
	_handleNewImageDir: function (dir) {
		this.setState({dir:dir});
		// debugger;
	},
	render: function(){
		return (
			<div className="dmd-body">
				<InputBox onNewImageDir={this._handleNewImageDir}/>
				<ImageRender  image={this.state.imageRender}/>
				<ImageBox dir= {this.state.dir} onImageRender={this._handleImageRender}/>
			</div>
			);
	}
});


module.exports = DMD;
