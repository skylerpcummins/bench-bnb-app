var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants.js');

var _filterParams = {};
var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return JSON.parse(JSON.stringify(_filterParams));
};

FilterParamsStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.FILTER_PARAMS_RECEIVED:
      this.resetParams(payload.filterParams);
      break;
  }
};

FilterParamsStore.resetParams = function(filterParams) {
  _filterParams = filterParams;
  FilterParamsStore.__emitChange();
};

module.exports = FilterParamsStore;
