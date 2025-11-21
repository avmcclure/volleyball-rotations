import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  const baseStyles = 'bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-slate-200/60';
  const interactiveStyles = onClick
    ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
    : '';

  return (
    <div
      className={`${baseStyles} ${interactiveStyles} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-4 sm:p-5 lg:p-6 border-b border-slate-200/60 ${className}`}>{children}</div>;
}

export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-4 sm:p-5 lg:p-6 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-4 sm:p-5 lg:p-6 border-t border-slate-200/60 ${className}`}>{children}</div>;
}
