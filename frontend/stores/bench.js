var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function() {
  return _benches.slice();
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.resetBenches(payload.benches);
      break;
    case BenchConstants.BENCH_RECEIVED:
      this.addBench(payload.bench);
      break;
  }
};

BenchStore.resetBenches = function(benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

BenchStore.addBench = function(bench) {
  _benches.push(bench);
}

module.exports = BenchStore;
