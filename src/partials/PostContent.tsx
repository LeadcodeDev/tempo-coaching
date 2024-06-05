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
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="size-full rounded-lg object-cover object-center"
          src={props.content.imgSrc}
          alt={props.content.imgAlt}
          loading="lazy"
        />
      </div>
      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        {props.children}
      </div>
    </div>
  );
}
