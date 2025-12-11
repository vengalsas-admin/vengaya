import { ElementType, ReactNode, HTMLAttributes } from 'react';

export type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;
