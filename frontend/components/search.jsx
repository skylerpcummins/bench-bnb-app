var React = require('react');
var Index = require('./index.jsx');
var Map = require('./map.jsx');
var FilterParamsStore = require('../stores/filter_params.js');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');

var Search = React.createClass({

  getInitialState: function() {
    return {
      benches: BenchStore.all(),
      filterParams: FilterParamsStore.params() };
  },

  _updateState: function() {
    this.setState({
      benches: BenchStore.all(),
      filterParams: FilterParamsStore.params()
    });


  },

  componentWillUnmount: function() {
    this.filterParamsToken.remove();
  },

  componentDidMount: function() {
    this.filterParamsToken = FilterParamsStore.addListener(this._updateState);
  },

  render: function() {
    return (
      <div>
        <Map clickHandler={this.clickMapHandler} />
        <Index />
      </div>
    );
  },

  clickMapHandler: function(pos) {
    this.props.history.pushState(null, '/benches/new', pos);
  }

});

module.exports = Search;
