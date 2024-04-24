import React from 'react';

const P = ({ children, size = 'base', className = '' }) => {
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'text-sm';
      break;
    case 'lg':
      sizeClasses = 'text-lg';
      break;
    case 'xl':
      sizeClasses = 'text-xl';
      break;
    case '2xl':
      sizeClasses = 'text-2xl';
      break;
    default:
      sizeClasses = 'text-base';
  }

  const mergedClasses = `${sizeClasses} ${className}`;

  return (
    <p className={mergedClasses}>
      {children}
    </p>
  );
};

export default P;
