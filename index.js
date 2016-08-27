'use strict';

const sinon = require('sinon');

module.exports = function() {
  let _this = this;
  this.succeed = sinon.stub(),
  this.fail = sinon.stub(),
  this.reset = function() {
    _this.succeed.reset();
    _this.fail.reset();
  };
};
