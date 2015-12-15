var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var FilterParamsStore = require('../stores/filter_params.js');

var allMarkers = [];

var Map = React.createClass({

  onChange: function() {
    //create map markers
    var currentMarkers = []

    BenchStore.all().forEach(function(bench){
      var pos = {lat: bench.lat, lng: bench.lng};


      var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: bench.description
      });

      allMarkers.push(marker);
      currentMarkers.push(marker);
    }.bind(this));

    this._removeMarkers(currentMarkers);
  },

  _removeMarkers: function(currentMarkers) {
    allMarkers.forEach(function(marker, idx) {
      if (currentMarkers.indexOf(marker) === -1) {
        allMarkers.splice(idx, 1);
        marker.setMap(null);
      }
    });
  },

  componentWillUnmount: function() {
    this.markerToken.remove();
    this.clickToken.remove();
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    google.maps.event.addListener(this.map, 'idle', function() {
      var mapBounds = this.map.getBounds();
      var northEast = mapBounds.getNorthEast();
      var southWest = mapBounds.getSouthWest();
      var currentBounds =
        {northEast:
          {lat: northEast.lat(), lng: northEast.lng()},
        southWest:
          {lat: southWest.lat(), lng: southWest.lng()}
        };

      ApiUtil.fetchBenches(currentBounds);
      FilterParamsStore.resetParams(this.props.params.filterParams);
    }.bind(this));

    this.markerToken = BenchStore.addListener(this.onChange);
    this.clickToken = this.map.addListener('click', this._getPositionFromClick);
  },

  _getPositionFromClick: function(e) {
    var pos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    this.props.clickHandler(pos)
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }

});

module.exports = Map;
