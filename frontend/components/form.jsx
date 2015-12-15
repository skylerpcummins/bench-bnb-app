var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util.js');


var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: ""
    };
  },

  _resetState: function() {
    this.setState({
      lat: "",
      lng: "",
      description: ""
    });
  },

  createBench: function(e) {
    e.preventDefault();
    var newBench = {lat: 0, lng: 0, description: ""};

    newBench['lat'] = parseFloat(this.state.lat);
    newBench['lng'] = parseFloat(this.state.lng);
    newBench['description'] = this.state.description;

    ApiUtil.createBench(newBench);
    this._resetState();
  },

  render: function() {

    return (
      <form onSubmit={this.createBench}>
        <label htmlFor='latitude'>Latitude:</label>
        <br />
        <input type='text' id='latitude' placeholder={this.state.lat} valueLink={this.linkState("lat")} />
        <br />

        <label htmlFor='longitude'>Longitude:</label>
        <br />
        <input type='text' id='longitude' placeholder={this.state.lng} valueLink={this.linkState("lng")} />
        <br />

        <label htmlFor='description'>Description:</label>
        <br />
        <input type='text' id='description' valueLink={this.linkState("description")} />
        <br />

        <button>Create Bench</button>
      </form>
    );
  }
});

module.exports = BenchForm;
