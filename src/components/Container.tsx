import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto relative z-10 max-w-[1750px] px-4 sm:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
