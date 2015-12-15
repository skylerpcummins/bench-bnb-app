var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./util/api_util.js');
var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BenchForm = require('./components/form.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="/benches/new" component={BenchForm} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
