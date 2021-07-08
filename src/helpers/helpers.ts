interface RomanTableType {
  [key: string]: number;
}
const romanTable: RomanTableType = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const RomanNumerals = {
  toRoman: (intToConvert: number): string => {
    let romanString = '';

    for (const key in romanTable) {
      const value = Math.floor(intToConvert / romanTable[key]);
      intToConvert -= value * romanTable[key];
      romanString += key.repeat(value);
    }

    return romanString;
  },
  fromRoman: (romanToConvert: string): number => {
    let numInteger = 0;

    for (let i = 0; i < romanToConvert.length; i++) {
      const currentValue = romanTable[romanToConvert[i]];
      const next = romanTable[romanToConvert[i + 1]];

      if (currentValue < next) {
        numInteger -= currentValue;
      } else {
        numInteger += currentValue;
      }
    }

    return numInteger;
  },
};

export default RomanNumerals;
