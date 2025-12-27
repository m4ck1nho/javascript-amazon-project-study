import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () =>{
  it('converts cents into dolars',
    () => {
      expect(formatCurrency(100)).toEqual('$1.00');
    });

    it('works with 0', () => {
      expect(formatCurrency(0).toEqual('0.00'));
    });
});