var Record = require('../record');
var assert = require('assert');

describe('record', function() {
  it('should have an artist', function() {
    var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
    assert.equal(record.artist, 'REM');
  });

  it('should have an title', function() {
    var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
    assert.equal(record.title, 'Out of Time');
  });

  it('should have an price', function() {
    var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
    assert.equal(record.price, 9.99);
  });

});
