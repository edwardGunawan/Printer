var React = require('react');
var ReactDOM = require('react-dom');
/* Input Component */
var InputBox = React.createClass({
	getInitialState: function(){
		return {
			path: "",
			button: "load"
		};
	},
	handlePathChange: function(e){
		e.preventDefault();
		var fileList = this.refs.fileButton.files;
		var path = this.refs.fileButton.value;
		this.setState({
		 	fileList: fileList,
			path: path
		});
	},
	handlePathSubmit: function(e){
		e.preventDefault();
		if(this.refs.path.value.length >0 ){
			this.props.onNewImageDir(this.state.fileList);
			this.setState({path:""});
		}
	},
	componentDidMount(){
  var input = ReactDOM.findDOMNode(this.refs.fileButton)
	  input.setAttribute('webkitdirectory', '')
	  input.setAttribute('directory', '')
	  input.setAttribute('multiple', '')
	},
	render: function(){
		return (
				<form className="pathInput" onChange={this.handlePathChange}>
					<input type="text" ref="path" defaultValue={this.state.path}/>
					<input type="file" ref="fileButton"/>
					<button onClick={this.handlePathSubmit}>{this.state.button}</button>
				</form>
			);
	}
});

module.exports = InputBox;
