import React, { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';
import './ui-button.css';

export interface UiButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
}

export const UiButton = ({ children, ...rest }: UiButtonProps) => {
  return (
    <button
      className={cx({
        'ui-button': true,
        'ui-button--disabled': rest.disabled,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default UiButton;
