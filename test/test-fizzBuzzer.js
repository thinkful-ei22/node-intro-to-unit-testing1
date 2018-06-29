'use strict';
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, buzz, fizz-buzz, or input number for'
  + ' input divisible by 3, 5, 15, or none respectively', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 6, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 45, expected: 'fizz-buzz'},
      {num: 7, expected: 7}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      [false],
      ['1'],
      ['hello']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});