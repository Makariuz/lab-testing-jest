function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return result.toFixed(2) + '$';
}


// Tests

/* // 1: Should return undefined when the parameter passed is a string
console.log('-->  should return undefined when parameter passed is a string');

// you are given the following:
console.log(centsToDecimals('abcdef') === undefined);

// this is the Jest expression that needs to  be updated accordingly:
expect(Function_To_Test(parameter)).toEqual(Expected_Result);

// solution: replace placeholders with corresponding function/value
expect(centsToDecimals('abcdef')).toEqual(undefined);

 */
// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { centsToDecimals };
