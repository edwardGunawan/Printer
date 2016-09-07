var React = require('react');
var ReactDOM = require('react-dom');
/* Input Component */
var InputBox = React.createClass({
	PropTypes: {
		onNewImageDir: React.PropTypes.func.isRequired
	},

	componentDidMount: function(){
		var input = ReactDOM.findDOMNode(this.refs.fileButton)
		input.setAttribute('webkitdirectory', '')
		input.setAttribute('directory', '')
		input.setAttribute('multiple', '')
	},

	_handlePathChange: function(e){
		e.preventDefault();

		/* get the fileList and path (for text Input) from the chosen directory
		*/
		var path = this.refs.fileButton.value;
		this.refs.path.value= path;
	},
	_handlePathSubmit: function(e){
		e.preventDefault();

		// passing the array of files back to DMD
		var fileList = this.refs.fileButton.files;
		this.props.onNewImageDir(this.refs.fileButton.files);


	},

	render: function(){
		return (
				<form className="pathInput" onSubmit={this._handlePathSubmit} >
					<input type="text" ref="path"/>
					<input type="file" ref="fileButton" onChange={this._handlePathChange}/>
					<button>Load</button>
				</form>
			);
	}
});

module.exports = InputBox;
