var React = require('react');
var PropTypes = React.PropTypes;
var DMD = require('DMD');

var Nav = React.createClass({
  // componentDidUpdate: function() {
  //   componentHandler.upgradeDom();
  // },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  handleClick: function(index){
    e.preventDefault();
    console.dir(index.target);
    debugger;
    this.props.onTabClick(index);
  },
  render: function() {
    var tabNames = this.props.items.map(function(item,index) {
        return (
          <a href={"#"+(item.title)} key={index} className={(this.props.active === index ? 'is-active' : '')+' mdl-tabs__tab'}>
            {item.title}
          </a>
        );
      }.bind(this));
    var tabContents = this.props.items.map(function(item,index){
      return (
        <div id={item.title} key={index} className={(this.props.active === index ? 'is-active': '')+" mdl-tabs__panel"}>
          {item.content}
        </div>
      );
    }.bind(this));
    return (

      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          {tabNames}
        </div>
          {tabContents}
      </div>
    );
  }

});

module.exports = Nav;



  // <a href="#control" className="mdl-tabs__tab is-active">Control</a>
  //  <a href="#pendingJobs" className="mdl-tabs__tab">Pending Jobs</a>
  //  <a href="#printHistory"  className="mdl-tabs__tab">Print History</a>
  // <div id={item.title} className={(this.props.active === index ? 'is-active': '')+" mdl-tabs__panel"}>
  //   {item.content}
  // </div>

  /*}<div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div className="mdl-tabs__tab-bar">
      {tabNames}
    </div>
      {tabContents}
  </div>*/
