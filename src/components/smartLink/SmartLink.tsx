import Link from 'next/link';
import { isExternalLink } from '@/utils/isExternalLink';

interface SmartLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SmartLink({ href, children, className = '', ...rest }: SmartLinkProps) {
  if (isExternalLink(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
