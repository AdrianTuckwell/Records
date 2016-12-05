var Customer = require('../customer');
var Record = require('../record');
var assert = require('assert');

describe('customer', function() {
  it('should have a name', function() {
    var customer = new Customer({name: 'Bobby', cash: 20 });
    assert.equal(customer.name, 'Bobby');
  });
  
  it('should have cash', function() {
    var customer = new Customer({name: 'Bobby', cash: 20 });
    assert.equal(customer.cash, 20);
  });

  it('should be able to buy a record', function() {
    var customer = new Customer({name: 'Bobby', cash: 20 });
    var record = new Record({artist:'REM',title:"Out of Time", price: 10});
    customer.buy(record);
    assert.deepEqual(record, customer.box[0]);
    assert.equal(10, customer.cash);
  });

  it('should be able to sell a record', function() {
    var customer = new Customer({name: 'Bobby', cash: 10 });
    var record = new Record({artist:'REM',title:"Out of Time", price: 10});
    customer.sell(record);
    assert.equal(0, customer.box.length);
    assert.equal(20, customer.cash);
  });
});
