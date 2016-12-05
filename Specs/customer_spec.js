var Customer = require('../customer');
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
});
