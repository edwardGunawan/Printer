var React = require('react');
var ReactDOM = require('react-dom');
/* Input Component */
var InputBox = React.createClass({
	getInitialState: function(){
		return {
			path: "testmasks/test1.png",
			button: "load"
		};
	},
	handlePathChange: function(e){
		e.preventDefault();

		/* get the fileList and path (for text Input) from the chosen directory
		*/
		var fileList = this.refs.fileButton.files;
		console.log('fileList: '+ fileList)
		var path = this.refs.fileButton.value;


		this.setState({
			path: path,
			dir: fileList
		});

	},
	handlePathSubmit: function(e){
		e.preventDefault();
		// console.log("dir state in input box: "+ this.state.dir);

		// passing the array of files back to DMD
		this.props.onNewImageDir(this.state.dir);


	},
	componentDidMount: function(){
		this.props.onNewImageDir({newPath:this.state.path});
		var input = ReactDOM.findDOMNode(this.refs.fileButton)
		input.setAttribute('webkitdirectory', '')
		input.setAttribute('directory', '')
		input.setAttribute('multiple', '')
	},
	render: function(){
		return (
				<form className="pathInput" onChange={this.handlePathChange}>
					<input type="text" ref="path" value={this.state.path}/>
					<input type="file" ref="fileButton"/>
					{/* yes supposedly*

					<input type="file" ref="fileButton" data-webkitdirectory data-mozdirectory />

					*/}
					<button onClick={this.handlePathSubmit}>{this.state.button}</button>
				</form>
			);
	}
});

module.exports = InputBox;
