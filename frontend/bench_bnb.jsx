var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench.js');
var ApiUtil = require('./util/api_util.js');
var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Search />, document.getElementById('content'));
});
