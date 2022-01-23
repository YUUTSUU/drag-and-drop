import {useEffect, useState} from 'react';
import {MDCCheckbox} from '@material/checkbox';
import {FormField} from '../FormField';

export const Checkbox = ({label, checked: value, name, onChange}) => {
  const [isInputChecked, setInputChecked] = useState(!!value);
  const [id] = useState(`checkbox`);

  useEffect(() => {
    const checkbox = new MDCCheckbox(document.getElementById(`mdc-${ id }`));

    return () => {
      checkbox.destroy();
    };
  }, []);

  useEffect(() => {
    setInputChecked(value);
  }, [value]);

  const onInputChange = (event) => {
    setInputChecked(event.target.checked);
    if (!!onChange) onChange(event.target.checked);
  };

  const val = `&value=${ isInputChecked }&type=checkbox`;

  const checkbox = (
    <div id={`mdc-${ id }`} className='mdc-checkbox'>
      <input type='hidden' name={name} value={val} />
      <input
        id={id}
        type='checkbox'
        className='mdc-checkbox__native-control'
        checked={isInputChecked}
        name={name}
        value={val}
        onChange={onInputChange}
      />
      <div className='mdc-checkbox__background'>
        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
          <path
            className='mdc-checkbox__checkmark-path'
            fill='none'
            d='M1.73,12.91 8.1,19.28 22.79,4.59'
          />
        </svg>
        <div className='mdc-checkbox__mixedmark'></div>
      </div>
      <div className='mdc-checkbox__ripple'></div>
    </div>
  );

  return !label ? (checkbox) : (
    <FormField label={label} htmlFor={id}>
      {checkbox}
    </FormField>
  );
};
