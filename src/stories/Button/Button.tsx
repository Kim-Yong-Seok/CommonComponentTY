import React from 'react';
import './button.css';

interface ButtonProps {
  id: string;
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  label: string;
  onClick: (values: any) => void;
  disabled: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { id, name, type, className, label, onClick, disabled } = props;
  return (
    <button id={id} name={name} type={type} className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
