var React = require('react');
var Index = require('./index.jsx');
var Map = require('./map.jsx');

var Search = React.createClass({

  render: function() {
    return (
      <div>
        <Map />
        <Index />
      </div>
    );
  }

});

module.exports = Search;
