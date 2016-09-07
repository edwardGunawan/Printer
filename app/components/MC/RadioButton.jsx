var React = require('react');
var PropTypes = React.PropTypes;

var RadioButton = React.createClass({
  propTypes: {
    update: PropTypes.bool
  },
  getInitialState: function(){
    return {
      content:"O"
    };
  },

  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  /* update all the single element it will update each single element, when the
  property is changed, or if there is any change */
  componentWillReceiveProps: function(newProps){
    if(newProps.update){
      this.setState({content:"O"})
    }
  },

  _handleClick: function(e){
    this.setState({
      content:"X"
    });
  },

  render: function() {
    return (
      <div>
        <a onClick={this._handleClick} style={{cursor:"pointer"}}> {this.state.content} </a>
      </div>
    );
  }
});

module.exports = RadioButton;
