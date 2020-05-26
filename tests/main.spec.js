/* eslint-disable no-undef */
describe('Main', () => {
  let arr; // declara a variavel antes dos hooks
  before(() => {

  }); // roda uma vez, antes do bloco
  after(() => {

  }); // roda uma vez, depois do bloco
  beforeEach(() => {
    arr = [1, 2, 3]; // define o valor que será usado
  }); // roda todas as vezes, antes de CADA bloco
  afterEach(() => {

  }); // roda todas as vezes, depois de CADA bloco
  // var arr = [1, 2, 3];

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length);
  });

  it('should have a size of 2 when pop another value to the array', () => {
    arr.pop();
    console.log(arr.length);
  });

  it('should remove 3 when use pop in the array', () => {
    console.log(arr.pop() === 3);
  });
});
