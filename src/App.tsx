import React, { FC, useState } from 'react';

import RomanNumerals from './helpers/helpers';

import './App.scss';

interface State {
  toRoman: number | undefined;
  fromRoman: string | undefined;
}

const ERROR_MSG = 'insert a valid value';
const REG_EXP = /^(?!.*[MCDLXVI]).*/;

const App: FC = () => {
  const [field, setFieldValue] = useState<State>({ toRoman: undefined, fromRoman: undefined });
  const [errors, setErrors] = useState<any>({});
  const [roman, setRoman] = useState<string>('');
  const [fromRoman, setFromRoman] = useState<number>();

  const handleConvertToRoman = () => {
    if (field.toRoman) {
      setErrors((prevState: State) => Object.assign({}, prevState, { toRoman: null }));
      setRoman(RomanNumerals.toRoman(field.toRoman as number));
    } else {
      setErrors((prevState: State) => Object.assign({}, prevState, { toRoman: ERROR_MSG }));
    }
  };
  const handleConvertFromRoman = () => {
    if (field.fromRoman) {
      setErrors((prevState: State) => Object.assign({}, prevState, { fromRoman: null }));
      setFromRoman(RomanNumerals.fromRoman(field.fromRoman as string));
    } else {
      setErrors((prevState: State) => Object.assign({}, prevState, { fromRoman: ERROR_MSG }));
    }
  };

  return (
    <div className="App">
      <h1>Optio Pay - Frontend engineer technical test</h1>
      <br />

      <div className="form-control">
        <label className="form-label" htmlFor="toRoman">
          Convert to roman
        </label>
        <div className="form-control-internal">
          <input
            type="number"
            name="toRoman"
            value={field.toRoman || ''}
            className="input-text"
            placeholder="Enter any integer"
            onKeyPress={(event) => /\D/.test(event.key) && event.preventDefault()}
            onChange={({ target }) =>
              setFieldValue((prevState: State) => {
                const newValue = { [target.name]: target.value.replace(/\D/, '') };
                return Object.assign({}, prevState, newValue);
              })
            }
          />
          <button className="btn" onClick={handleConvertToRoman}>
            Convert to Roman
          </button>
        </div>
        {errors.toRoman && <div className="error">{errors.toRoman}</div>}
        {roman && !errors.toRoman && <div className="result">{roman}</div>}
      </div>

      <div className="form-control">
        <label className="form-label" htmlFor="fromRoman">
          Convert to integer
        </label>
        <div className="form-control-internal">
          <input
            type="text"
            name="fromRoman"
            value={field.fromRoman || ''}
            className="input-text"
            placeholder="Enter a valid Roman"
            onKeyPress={(event) => REG_EXP.test(event.key) && event.preventDefault()}
            onChange={({ target }) =>
              setFieldValue((prevState: State) => {
                const newValue = { [target.name]: target.value };
                return Object.assign({}, prevState, newValue);
              })
            }
          />
          <button className="btn" onClick={handleConvertFromRoman}>
            Convert to Integer
          </button>
        </div>
        {errors.fromRoman && <div className="error">{errors.fromRoman}</div>}
        {fromRoman && !errors.fromRoman && <div className="result">{fromRoman}</div>}
      </div>
    </div>
  );
};

export default App;
