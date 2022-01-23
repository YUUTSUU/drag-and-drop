import {useEffect, useState} from 'react';
import {MDCRipple} from '@material/ripple';

export const IconButton = ({ icon, color, imgSrc, density, disabled, onClick}) => {
  const [id] = useState(`mdc-icon-button`);

  useEffect(() => {
    const ripple = new MDCRipple(document.getElementById(id));
    ripple.unbounded = true;

    return () => {
      ripple.destroy();
    };
  }, []);

  let className = 'mdc-icon-button material-icons';

  if (!!density) {
    className += ` mdc-icon-button--density-${ density }`;
  }

  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      tabIndex={0}
      type='button'
      disabled={disabled}
      style={{color}}
    >
      {icon && icon}
      {imgSrc && <img src={imgSrc} />}
    </button>
  );
};
