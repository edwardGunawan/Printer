var React = require('react');
var DMD = require('DMD');
var LS = require('LS');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <DMD/>
        <LS/>
      </div>
    );
  }
});

module.exports = Main;
