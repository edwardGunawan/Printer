/* DMD image */
var React = require('react');
var InputBox = require('InputBox');
var ImageBox = require('ImageBox');
var $ = require('jquery');

var DMD = React.createClass({
	getDefaultProps: function(){
		return {
			title: "Title",
		};
	},
	getInitialState: function(){
		/* set the initial state directory */
		return {
			dir:"./app/components/imageSample"
		};
	},
	handleNewImageDir: function (dir) {
		this.setState({dir:dir});
		// debugger;
	},
	render: function(){
		return (
			<div className="dmdBody">
				<h1>{this.props.title}</h1>
				<InputBox onNewImageDir={this.handleNewImageDir}/>
				<ImageBox dir= {this.state.dir}/>
			</div>
			);
	}
});


module.exports = DMD;
