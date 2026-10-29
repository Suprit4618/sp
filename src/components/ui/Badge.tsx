import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rose' | 'sage' | 'peach' | 'butter' | 'berry';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'rose',
  className = '',
}) => {
  const variantStyles = {
    rose: 'bg-[#DEC5A3]/30 text-[#301923] border border-[#DEC5A3]/70',
    sage: 'bg-[#533630]/15 text-[#533630] border border-[#533630]/30',
    peach: 'bg-[#B8442D]/15 text-[#B8442D] border border-[#B8442D]/30',
    butter: 'bg-[#DEC5A3]/40 text-[#301923] border border-[#DEC5A3]/80',
    berry: 'bg-[#301923] text-[#F6EFE5] border border-transparent',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wider uppercase ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
