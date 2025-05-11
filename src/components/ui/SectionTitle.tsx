
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className 
}) => {
  return (
    <div className={cn(
      'mb-10',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="heading-lg mb-3">{title}</h2>
      {subtitle && <p className="text-mba-dark/80 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
