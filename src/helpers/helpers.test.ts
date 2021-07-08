import RomanNumerals from './helpers';

describe('Testing Helpers', () => {
  it('fromRoman', () => {
    expect(RomanNumerals.fromRoman('M')).toBe(1000);
    expect(RomanNumerals.fromRoman('III')).toBe(3);
    expect(RomanNumerals.fromRoman('MMDMXC')).toBe(2590);
    expect(RomanNumerals.fromRoman('LD')).toBe(450);
    expect(RomanNumerals.fromRoman('XCM')).toBe(890);
  });
  it('toRoman', () => {
    expect(RomanNumerals.toRoman(1990)).toBe('MCMXC');
    expect(RomanNumerals.toRoman(4)).toBe('IV');
    expect(RomanNumerals.toRoman(3010)).toBe('MMMX');
    expect(RomanNumerals.toRoman(99)).toBe('XCIX');
  });
});
