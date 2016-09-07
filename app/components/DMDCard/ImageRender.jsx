var React = require('react');
var PropTypes = React.PropTypes;

var ImageRender = React.createClass({
  propTypes: {
    image: PropTypes.string
  },

  render: function() {
    return (
      <div className="image">
        <img src={this.props.image} alt="My Image" />
      </div>
    );
  }

});

module.exports = ImageRender;
