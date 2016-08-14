var ReactDOM = require('react-dom');
var React = require('react');
var Main = require('Main');
var DMD = require('DMD');
var {hashHistory, IndexRoute, Router, Route} = require('react-router');

/* There is 1 Router that takes the history of hashHistory, and Route that takes the
  path and the component
  Nested Route, the outer layer should just be component, instead of path, because
  path will let route guide you to that route in the URL, and if you do // then
  it will duplicate. Your second example doesn't work because it's trying to express
  // as a path to navigate to. Each path,
  even if duplicated, becomes a node in the route tree. If you don't mentioned the path
  then it will be the parent path, so in the link tag you just have to do, /. For the
  link tag you want to specify it from the root, for the path
  This is a thread issue: https://github.com/reactjs/react-router/issues/1950
  If you put a path in the route, the root path will have nothing to render, so
  it will be nothing, and if only if you route it to /MainTopTabs it will route it*/
ReactDOM.render(
  <Main/>,
    document.getElementById('content')

);

// <Router history={hashHistory}>
//   <Route path="/" component={Main}>
//     <Route component={MainTopTabs}>
//         <IndexRoute component={Control}/>
//         <Route path="PendingJobs" component={PendingJobs}/>
//         <Route path="PrintHistory" compoennt={PrintHistory}/>
//       </Route>
//   </Route>
// </Router>
