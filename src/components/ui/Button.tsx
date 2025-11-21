import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95 touch-manipulation';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 active:from-indigo-800 active:to-violet-800 focus:ring-indigo-500',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 active:from-slate-800 active:to-slate-900 focus:ring-slate-500',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus:ring-indigo-500 bg-white',
    ghost: 'text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-500 shadow-none',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base',
    lg: 'px-6 py-2.5 text-base sm:px-8 sm:py-3.5 sm:text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
