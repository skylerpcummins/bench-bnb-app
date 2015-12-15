var ApiActions = require('../actions/api_actions.js');

ApiUtil = {
  fetchBenches: function(currentBounds) {
    $.get('api/benches', {"bounds": currentBounds}, function(benches){
      ApiActions.receiveAllBenches(benches);
    });
  },

  createBench: function(newBench) {
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: {bench: newBench},
      success: function(bench) {
      ApiActions.receiveSingleBench(newBench);
      }
    })
  }
}

module.exports = ApiUtil;
