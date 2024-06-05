// const GradientText = (props) => (jsx("span", { className: "bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent", children: props.children }));

import type { PropsWithChildren } from 'react';

export function GradientText(props: PropsWithChildren) {
  return (
    <span className="bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
      {props.children}
    </span>
  );
}
