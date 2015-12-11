var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');


var Map = React.createClass({

  onChange: function() {
    //create map markers
    BenchStore.all().forEach(function(bench){
      var pos = {lat: bench.lat, lng: bench.lng};

      var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: bench.description
      });
    }.bind(this));


  },

  componentWillUnmount: function() {
    this.markerToken.remove();
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    google.maps.event.addListener(this.map, 'idle', function() {
      ApiUtil.fetchBenches();
    });

    this.markerToken = BenchStore.addListener(this.onChange);
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }

});

module.exports = Map;
