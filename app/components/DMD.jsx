/* DMD image */
var React = require('react');
var InputBox = require('InputBox');
var ImageBox = require('ImageBox');

var DMD = React.createClass({
	getDefaultProps: function(){
		return {
			title: "Title",
		};
	},
	getInitialState: function(){
		/* set the initial state directory */
		return {
			dir:"./imageSample"
		};
	},
	handleNewImageDir: function (dir) {
		this.setState({dir:dir});
		// debugger;
	},
	shouldComponentUpdate: function(nextProps, nextState){
		return nextState.dir !== this.state.dir;

	},
	render: function(){
		return (
			<div className="dmdBody">
				<h1> TITLE </h1>
				<InputBox onNewImageDir={this.handleNewImageDir}/>
				<ImageBox dir= {this.state.dir}/>
			</div>
			);
	}
});


module.exports = DMD;
