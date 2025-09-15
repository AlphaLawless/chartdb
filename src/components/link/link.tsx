import React from 'react';
import { cn } from '@/lib/utils';

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn('text-pink-600 hover:underline', className)}
    {...props}
  >
    {children}
  </a>
));

Link.displayName = 'Link';
