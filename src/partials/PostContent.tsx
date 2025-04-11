import type { PropsWithChildren } from 'react';

type Props = {
  content: {
    imgSrc: string;
    imgAlt: string;
  };
};

export function PostContent(props: PropsWithChildren<Props>) {
  return (
    <div className="mx-auto mt-5 max-w-prose">
      <div className="prose mt-8 text-justify prose-img:rounded-lg">
        {props.children}
      </div>
    </div>
  );
}
