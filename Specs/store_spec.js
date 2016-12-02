var Store = require('../store');
var Record = require('../record');
var assert = require('assert');

describe('store', function() {
  it('should have an name', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(store.name, 'Rocking Ricks');
  });

  it('should have an city', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(store.city, 'Inverness');
  });
});

describe('store stock', function() {
    it('should start off with no stock ', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      assert.equal(0, store.box.length);
    });
    
    it('should be able to add a record', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
      store.add(record);
      assert.deepEqual(record, store.box[0]);
    });



});
