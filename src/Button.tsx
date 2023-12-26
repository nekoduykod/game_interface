import React from 'react';
import './index.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', variant = 'primary', disabled = false, onClick }) => {
  const variantMapping = {
    'primary': 'bg-primary-500 hover:bg-primary-600',
    'secondary': 'bg-secondary-500 hover:bg-secondary-600',
    'ghost': 'bg-ghost-500 hover:bg-ghost-600'
  };

  return (
    <button
      type={type}
      className={`${variantMapping[variant]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-${variant}-500`}
      disabled={disabled}
      onClick={onClick}
    >
      ⭐ {children}
    </button>
  );
};

export default Button;