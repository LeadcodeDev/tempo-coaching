// const GradientText = (props) => (jsx("span", { className: "bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent", children: props.children }));

import type { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export function GradientText(props: PropsWithChildren<Props>) {
  return (
    <span
      className={`bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent dark:bg-primary dark:bg-none ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </span>
  );
}
