import type { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  description: ReactNode;
};

export function PaginationHeader(props: Props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <div className="mt-3 text-gray-700">{props.description}</div>
    </div>
  );
}
