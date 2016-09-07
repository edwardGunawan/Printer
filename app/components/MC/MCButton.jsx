var React = require('react');
var PropTypes = React.PropTypes;

var MCButton = React.createClass({
  propTypes: {
    MCButton: PropTypes.array,
    onButton: PropTypes.func
  },

  _handleClick: function(buttonNames){
    return () => {
      this.props.onButton(buttonNames);
    }
    // var url = $(e.currentTarget).data("url");
    // $.ajax({
    //         url:url,
    //         method: 'POST',
    //         success: function(result) {
    //           alert('it works!');
    //         }.bind(this)
    //     });

  },

  render: function() {
    {/* custom attribute needs to have data on the front of it  to access, e.target.dataset.url*/}
    var directions = this.props.MCButton.map((buttonObj, i)=>{
        return (
          <button key={i} data-url={buttonObj.url} onClick={this._handleClick(buttonObj.button)} className="mdl-button mdl-button--icon">
            <i ref="icons" className="material-icons"> {buttonObj.button} </i>
          </button>
        );
      });

    return (
      <div className="mdl-content">
        {directions}
      </div>

    );
  }

});

module.exports = MCButton;
