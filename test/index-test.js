var vows = require('vows');
var assert = require('assert');
var util = require('util');
var dwolla = require('passport-dwolla');


vows.describe('passport-dwolla').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(dwolla.version);
    },
  },
  
}).export(module);
