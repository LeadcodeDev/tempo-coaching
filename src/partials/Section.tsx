import type { ReactNode } from 'react';

type Props = {
  title?: ReactNode;
  children: ReactNode;
};

export function Section(props: Props) {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-10">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}
      {props.children}
    </div>
  );
}
