import type { ReactNode } from 'react';

type Props = {
  id?: string;
  title?: ReactNode;
  children: ReactNode;
};

export function Section(props: Props) {
  return (
    <div id={props.id} className="mx-auto max-w-screen-xl px-5 py-10">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}
      {props.children}
    </div>
  );
}
