# mock-lambda-context

A mock AWS Lambda context for Node.js

Read more: https://medium.com/@rotemtam/serverless-applications-continuous-delivery-with-aws-lambda-and-api-gateway-part-1-unit-tests-e517aa1cd09e

## Getting started

`npm i --save-dev mock-lambda-context`

## Example Unit Test

```js
'use strict';

const expect = require('chai').expect
 , SomeLambda = require('./some-lambda-func')
 , MockContext = require('mock-lambda-context');

describe('Some Lambda Func', function() {
  let ctx;

  before(function() {
    ctx = new MockContext();
  });

  describe('When Some param is greater than zero', function() {
    before(function(done) {
      SomeLambda({someParam: 10}, ctx, done)
    });

    it('should succeed with Yay', function() {
      expect(ctx.succeed.calledWith('Yay')).to.equal(true)
    });

    after(function() {
      //reset counters
      ctx.reset();
    })

  })
});
```
