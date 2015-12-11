var ApiActions = require('../actions/api_actions.js');

ApiUtil = {
  fetchBenches: function() {
    $.get('api/benches', {}, function(benches){
      ApiActions.receiveAllBenches(benches);
    });
  }
}

module.exports = ApiUtil;
