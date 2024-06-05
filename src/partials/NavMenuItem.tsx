import type { PropsWithChildren } from 'react';

export function NavMenuItem(
  props: PropsWithChildren<{ href: string; target?: string }>
) {
  return (
    <li className="text-gray-700 hover:text-primary">
      <a href={props.href} target={props.target || '_self'}>
        {props.children}
      </a>
    </li>
  );
}
