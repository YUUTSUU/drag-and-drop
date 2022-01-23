import {useEffect, useState} from 'react';
import {MDCRipple} from '@material/ripple/index';
import {CircularProgress} from '../CircularProgress';
import './index.css';

export const Button = ({label, loading, onClick}) => {
  const [id] = useState(`mdc-button`);

  useEffect(() => {
    const ripple = new MDCRipple(document.getElementById(id));

    return () => {
      ripple.destroy();
    };
  }, []);

  let className = 'mdc-button';

  return (
    <div className='button-container'>
      {loading && <CircularProgress />}
      <button
        id={id}
        className={className}
        onClick={onClick}
        type={'button'}
      >
        <div className='mdc-button__ripple' />
        <span className='mdc-button__label'>{label}</span>
      </button>
    </div>
  );
};
