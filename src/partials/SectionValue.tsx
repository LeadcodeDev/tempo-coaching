import type { ReactNode } from 'react';

import { GradientText } from '@/partials/GradientText';

type Props = {
  title?: string;
  subtitle?: string;
  image: string;
  inverted?: boolean;
  content: {
    title?: string;
    description: ReactNode;
    items: {
      icon: ReactNode;
      title: string;
      description: ReactNode;
    }[];
  };
};

export default function SectionValue(props: Props) {
  return (
    <section className="relative mx-auto max-w-screen-xl p-5 md:py-20">
      {(props.title || props.subtitle) && (
        <div className="mb-8 max-w-xl text-center sm:mx-auto md:mx-auto md:mb-12 lg:max-w-2xl">
          {props.subtitle && (
            <p className="text-sm font-bold uppercase tracking-wide">
              {props.subtitle}
            </p>
          )}

          {props.title && (
            <h2 className="font-caveat mb-4 text-5xl font-bold tracking-tighter md:text-6xl">
              <GradientText className="pr-3">{props.title}</GradientText>
            </h2>
          )}
        </div>
      )}

      <div
        className={`flex flex-col gap-16 pt-5 md:flex-row ${
          props.inverted ? 'order-2' : ''
        }`}
      >
        <div
          className={`order-2 basis-1/2 ${
            props.inverted ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <img src={props.image} className="w-full rounded-lg" alt="" />
        </div>
        <div
          className={`order-1 basis-1/2 ${
            props.inverted ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <div className="mb-12 text-lg dark:text-slate-400">
            {props.content.title && (
              <h3 className="font-caveat mb-5 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
                {props.content.title}
              </h3>
            )}
            <div className="text-justify text-base dark:text-gray-300">
              {props.content.description}
            </div>
          </div>
          <div className="mx-auto grid gap-8 gap-y-4 md:gap-y-8">
            {props.content.items.map((item, index) => (
              <div key={index} className="flex max-w-none flex-row">
                <div className="mr-2 flex size-8 items-center justify-center rounded-full bg-primary/50 p-2 text-gray-50">
                  {item.icon}
                </div>
                <div className="mt-0.5">
                  <h3 className="ml-2 text-lg font-medium leading-6 dark:text-white rtl:ml-0 rtl:mr-2">
                    {item.title}
                  </h3>
                  <div className="ml-2 mt-1 text-justify dark:text-slate-400 rtl:ml-0 rtl:mr-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
