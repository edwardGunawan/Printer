var React = require('react');
var PropTypes = React.PropTypes;
var DMD = require('DMD');



var Card = React.createClass({
  getDefaultProps: function(){
    return{
      title: 'Card Component'
    };
  },
  renderContent: function(){
    if(typeof this.props.content !== 'undefined'){
      return (
        <div className="mdl-card__supporting-text">
          {this.props.content}
        </div>
      );
    }
  },
  render: function() {

    return (
      <div>
        <div className="mdl-card__title">
          <div className="mdl-card__title-text"> {this.props.title} </div>
        </div>
            {/*}<div className="mdl-card__title">
               <h2 className="mdl-card__title-text">{this.props.title}</h2>
            </div>*/}
        {this.renderContent()}
      </div>

    );
  }

});

module.exports = Card;
