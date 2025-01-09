import type { PropsWithChildren } from 'react';

export function NavMenuItem(
  props: PropsWithChildren<{ href: string; target?: string }>
) {
  return (
    <div className="text-gray-700 hover:text-primary dark:text-white/50">
      <a href={props.href} target={props.target || '_self'}>
        {props.children}
      </a>
    </div>
  );
}
