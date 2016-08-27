'use strict';

const expect = require('chai').expect;
const Mock = require('../index');

describe('Mock Lambda Context', function() {

	describe('Initializaiton', function() {
		let mock;
		before(function() {
			mock = new Mock();
		});

		it('should have a succeed method', function() {
			expect(mock).itself.to.respondTo('succeed');
		});

		it('should have a fail method', function() {
			expect(mock).itself.to.respondTo('fail');
		});
	});


	describe('Reset', function() {
		let mock;
		before(function() {
			mock = new Mock();
			mock.succeed();
			mock.fail();
			mock.reset();
		});

		it('succeed should have a call count of 0', function() {
			expect(mock.succeed.callCount).to.equal(0)
		});

		it('fail should have a call count of 0', function() {
			expect(mock.fail.callCount).to.equal(0);
		})
	})
})
