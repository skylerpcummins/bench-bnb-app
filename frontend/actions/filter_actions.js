var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

FilterActions = {
  receiveFilterParams: function(filterParams) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_PARAMS_RECEIVED,
      filterParams: filterParams
    });
  }
}

module.exports = FilterActions;
