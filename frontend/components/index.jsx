var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map.jsx')

var Index = React.createClass({

  getInitialState: function() {
    return { benches: BenchStore.all() }
  },

  _updateState: function() {
    this.setState({
      benches: BenchStore.all()
    });
  },

  componentWillUnmount: function() {
    this.benchToken.remove();
  },

  componentDidMount: function() {
    this.benchToken = BenchStore.addListener(this._updateState);

  },

  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = Index;
