// eslint-disable-next-line no-var
// eslint-disable-next-line prefer-destructuring
const expect = require('chai').expect;

/* eslint-disable no-undef */
describe('Main', () => {
  let arr; // declara a variavel antes dos hooks
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop another value to the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
});
