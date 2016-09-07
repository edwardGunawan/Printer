var React = require('react');
var $ = require('jQuery');
var imageSector = require('imageSelector');
var PropTypes = React.PropTypes;

var ImageZoom = React.createClass({
  componentDidMount: function(){
    $('#ladybug_ant').imgAreaSelect({ onSelectChange: this.preview });

  },
  preview: function(img,selection){
    this.props.onVal({
      x:selection.width,
      y:selection.height,
      x2:selection.x2,
      y2:selection.y2,
      x1:selection.x1,
      y1:selection.y2
    });
  },

  render: function() {
    return (
      <div>
        <img src={this.props.originalImage} className="original-image" style={{"position": "relative"}} />
      </div>
    );
  }

});

module.exports = ImageZoom;
