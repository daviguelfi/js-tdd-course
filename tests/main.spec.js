import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';


/* eslint-disable no-undef */
describe('Calc', () => {
  // smoke tests
  describe('smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });
  });
});

describe('Sum', () => {
  it('should return 4 when `sum(2,2)`', () => {
    expect(sum(2, 2)).to.be.equal(4);
  });
});

describe('Sub', () => {
  it('should return 2 when `sub(6,4)`', () => {
    expect(sub(6, 4)).to.be.equal(2);
  });

  it('should return -4 when `sub(6, 10)`', () => {
    expect(sub(6, 10)).to.be.equal(-4);
  });
});

describe('Div', () => {
  it('should return 2 when `div(6,3)`', () => {
    expect(div(6, 3)).to.be.equal(2);
  });

  it('should return `Não é possivel divisão por zero!` whe divide by zero', () => {
    expect(div(4, 0)).to.be.equal('Não é possivel divisão por zero!');
  });
});

describe('Mult', () => {
  it('should return 4 when `mult(2,2)`', () => {
    expect(mult(2, 2)).to.be.equal(4);
  });
});
