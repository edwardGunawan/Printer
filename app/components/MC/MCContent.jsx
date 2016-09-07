var React = require('react');
var RadioButton = require('RadioButton');
var PropTypes = React.PropTypes;

var MCContent = React.createClass({
  propTypes: {
    MCContent: PropTypes.object,
    updateSize: PropTypes.bool
  },

  render: function() {
    var self = this;

    /* this method will execute every single time the rows and columns is invoked, so
    all the element inside the table (row) will be looped again, so don't
    worry about the refresh on this one, becuase row can have componentWillUpdate
    to update all the element in the props */
      /* <RadioButton/> */
    function coordinate(rows, columns){
      var arr = [];
      var k = 0;
      for(var i=0; i<rows ; i++){
        var columnArr = [];
        for(var j=0; j<columns; j++){
          columnArr.push(
              <td className="mdl-data-table__cell--non-numeric" key={j}>
                <RadioButton update={self.props.updateSize}/>
              </td>
          );
        }
        arr.push(<tr key={i}>{columnArr}</tr>);
      }
      return arr;
    }
    return (
      <div>
      <table style={{tableLayout:"fixed"}}>
        <tbody>
          {coordinate(this.props.MCContent.rows, this.props.MCContent.columns)}
        </tbody>
      </table>
    </div>
    );
  }

});

module.exports = MCContent;

// <td value={keyI} key={j}>
//   <button ref ={keyI} onClick={self.handleClick} className="mdl-button mdl-button--icon">
//     <i className="material-icons">clear</i>
//   </button>
// </td>
