/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
https://jestjs.io/docs/using-matchers
*/

const { centsToDecimals } = require("../src/cents-to-decimals");

describe('centsToDecimals function', () => {
  // Describes the suite / group of tests

  // Use this test suite as a starting point/reference.

  it('should returns undefined when parameter passed is a string.', () => {
    // console.log(centsToDecimals('abcdef') === undefined);
    const result = centsToDecimals('abcdef')
    // expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(result).toEqual(undefined);
  });
 
  // Fix the below test suites:

  it('should returns undefined when parameter passed is a string containing number characters.', () => {
    // console.log(centsToDecimals('12345') === undefined);
    const containsStr = centsToDecimals('12345')
    // ... complete the test assertion below
    expect(containsStr).toEqual(undefined);
  });

  it('should returns undefined when NaN value is passed as a parameter.', () => {
    // console.log(centsToDecimals(NaN) === undefined);
    const notNumber = centsToDecimals(NaN)
    // ... complete the test assertion below
    expect(notNumber).toEqual(undefined);
  });

  it('should returns undefined when undefined value is passed as a parameter', () => {
    // console.log(centsToDecimals(undefined) === undefined);
    const undefinedValue = centsToDecimals(undefined)
    // ... complete the test assertion below
    expect(undefinedValue).toEqual(undefined);
  });

  it('should returns undefined when parameter is not passed.', () => {
    // console.log(centsToDecimals() === undefined);
    const nothingPassed = centsToDecimals()
    // ... complete the test assertion below
    expect(nothingPassed).toEqual(undefined);
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    // console.log(centsToDecimals(1000).slice(0, 5) === '10.00');
    const floatCents = centsToDecimals(1000).slice(0, 5)
    // ... complete the test assertion below
    expect(floatCents).toEqual('10.00');

    // console.log(centsToDecimals(50273).slice(0, 6) === '502.73');
    const floatSlice = centsToDecimals(50273).slice(0, 6)
    // ... complete the test assertion below
    expect(floatSlice).toEqual('502.73');

    // console.log(centsToDecimals(0).slice(0, 4) === '0.00');
    const floatZero = centsToDecimals(0).slice(0, 4)
    // ... complete the test assertion below
    expect(floatZero).toEqual('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    // console.log(centsToDecimals(1000) === '10.00$');
    const appendStr = centsToDecimals(1000)
    // ... complete the test assertion below
    expect(appendStr).toEqual('10.00' + '$');

    // console.log(centsToDecimals(0) === '0.00$');
    const appendZero = centsToDecimals(0.00)
    // ... complete the test assertion below
    expect(appendZero).toEqual('0.00' + '$');
  });
});
