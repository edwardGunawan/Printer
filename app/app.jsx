var ReactDOM = require('react-dom');
var React = require('react');
var Main = require('Main');
var Control = require('Control');
var MainTopTabs = require('MainTopTabs');
var PrintHistory = require('PrintHistory');
var PendingJobs = require('PendingJobs')
var {hashHistory, IndexRoute, Router, Route} = require('react-router');

/* There is 1 Router that takes the history of hashHistory, and Route that takes the
  path and the component */
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="/" component={Main.MainTopTabs}>
            <Route path="PendingJobs" component={PendingJobs}/>
            <Route path="PrintHistory" component={PrintHistory}/>
            <IndexRoute component={Control}/>
          </Route>
      </Route>
    </Router>,
    document.getElementById('content')

);
