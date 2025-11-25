import { type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  );
};

export interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'default' | 'small' | 'none';
  background?: 'white' | 'gray' | 'navy' | 'transparent';
  id?: string;
}

export const Section = ({
  children,
  className = '',
  padding = 'default',
  background = 'white',
  id,
}: SectionProps) => {
  const paddingClasses = {
    default: 'section-padding',
    small: 'section-padding-sm',
    none: '',
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-navy-900 text-white',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  title,
  subtitle,
  className = '',
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Container;
