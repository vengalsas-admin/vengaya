import { ContainerProps } from '@/interfaces/container';

export default function Container<T extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = as || 'div';

  return (
    <Component className={`container${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </Component>
  );
}
