var React = require('react');
var LSList = require('LSList');
var LSButtonsRow = require('LSButtonsRow');

var LS = React.createClass({
  getInitialState: function(){
    return {
      isClick: false
    };
  },
  /* after the user clicked on the on or off button */
  handleOnPress: function(boolVal){
    /* this setState doesn't cost any serState */
    this.setState({isCLick: boolVal});
    // console.log(boolVal);
    // console.log("this is the current state", this.state.isClick);
    // debugger;
    if(this.state.isClick){
      console.log('It has click the on button!');
    } else{
      console.log('it has click the off button!');
    }
  },

  render: function() {
    return (
      <div>
        <h2> LS Card </h2>
        <LSList/>
        <LSButtonsRow onPress = {this.handleOnPress}/>
      </div>
    );
  }
});

module.exports = LS;
