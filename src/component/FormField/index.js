import {useEffect, useState} from 'react';
import {MDCFormField} from '@material/form-field';

export const FormField = ({label, htmlFor, children}) => {
  const [id] = useState(`mdc-form-field`);

  useEffect(() => {
    const element = document.getElementById(id);
    const formField = new MDCFormField(element);

    return () => {
      formField.destroy();
    };
  }, []);

  return (
    <div id={id} className="mdc-form-field">
      {children}
      <label htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
