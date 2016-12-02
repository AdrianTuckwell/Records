var Store = require('../store');
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
