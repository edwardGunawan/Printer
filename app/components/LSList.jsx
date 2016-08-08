var React = require('react');
var Scroll = require('Scroll');

var LSList = React.createClass({
  getInitialState: function(){
    return {
      lights: ["UV", "Blue", "Green"]
    };
  },
  render: function() {
    var lights = this.state.lights.map(function(light){
      return (
        <li key={light}>
          <label><input type="checkbox"/> {light} </label> <Scroll max={100}/>
        </li>
      );
    });
      return (
          <div>
            <ul>
              {lights}
            </ul>
          </div>
      );
  }
});

module.exports = LSList;
