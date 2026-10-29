import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8442D] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread hover:shadow-embroidery border border-transparent',
    secondary:
      'bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60 border border-[#DEC5A3]',
    outline:
      'bg-transparent text-[#301923] border border-dashed border-[#B8442D]/70 hover:bg-[#DEC5A3]/30 hover:border-[#B8442D]',
    ghost:
      'bg-transparent text-[#301923] hover:bg-[#DEC5A3]/30 hover:text-[#B8442D]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
