import React from 'react';

const Button = ({ children, className = '', variant = 'primary' }) => {
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-300 text-gray-950 hover:bg-gray-400';
      break;
    case 'danger':
      variantClasses = 'bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      variantClasses = '';
  }

  const baseClasses = 'py-2 px-4 rounded-md font-semibold focus:outline-none';
  const mergedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button className={mergedClasses}>
      {children}
    </button>
  );
};

export default Button;

