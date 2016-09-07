var React = require('react');
var PropTypes = React.PropTypes;

var InputImage = React.createClass({
  _handleSubmit: function(e){
    e.preventDefault();
    this.props.onInput({
      x1:this.refs.x1.value,
      x2:this.refs.x2.value,
      y1:this.refs.y1.value,
      y2:this.refs.y2.value,
      x:this.refs.x.value,
      y:this.refs.y.value
    })
  },

  render: function() {
    // var {x1,x2,y1,y2,x,y} = this.props.value;
    // this.refs.x1.value = x1;
    // this.refs.x2.value = x2;
    // this.refs.y1.value = y1;
    // this.refs.y2.value = y2;
    // this.refs.x.value = x;
    // this.refs.y.value = y;
    return (
      <form onSubmit = {this.handleSubmit}>
        <input className="mdl-textfield__input" type="text" id="x1"/>
        <label className="mdl-textfield__label" htmlFor="x1">x1</label>
        <input className="mdl-textfield__input" type="text" id="y1"/>
        <label className="mdl-textfield__label" htmlFor="y1">y1</label>
        <input className="mdl-textfield__input" type="text" id="x2"/>
        <label className="mdl-textfield__label" htmlFor="x2">x2</label>
        <input className="mdl-textfield__input" type="text" id="y2"/>
        <label className="mdl-textfield__label" htmlFor="y2">y2</label>
        <input className="mdl-textfield__input" type="text" id="x"/>
        <label className="mdl-textfield__label" htmlFor="x">x</label>
        <input className="mdl-textfield__input" type="text" id="y"/>
        <label className="mdl-textfield__label" htmlFor="y">y</label>
      </form>
    );
  }

});

module.exports = InputImage;
