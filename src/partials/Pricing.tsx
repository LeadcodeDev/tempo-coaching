import { CheckIcon } from 'lucide-react';
import { Fragment } from 'react';

import { GradientText } from '@/partials/GradientText';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Pricing() {
  const tiers = [
    {
      name: 'Accompagnement personnel',
      href: '#contact',
      price: '20€',
      description: '{description}',
      features: ['{feature}', '{feature}', '{feature}', '{feature}'],
      mostPopular: true,
    },
    {
      name: 'Accompagnement collectif',
      href: '#contact',
      price: '20€',
      description: '{description}',
      features: ['{feature}', '{feature}', '{feature}', '{feature}'],
      mostPopular: false,
    },
    {
      name: 'Accompagnement en entreprise',
      href: '#contact',
      description: '{description}',
      features: ['{feature}', '{feature}', '{feature}', '{feature}'],
      mostPopular: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      <div className="relative mx-auto max-w-screen-xl px-5">
        <div className="mb-8 max-w-xl text-center sm:mx-auto md:mx-auto md:mb-12 lg:max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide">
            sous-titre
          </p>

          <h2 className="font-caveat mb-4 text-5xl font-bold tracking-tighter md:text-6xl">
            <GradientText className="pr-3">Tarifications</GradientText>
          </h2>
        </div>
      </div>
      <div className="max-w-smd isolate mx-auto grid grid-cols-1 gap-8 px-5 pb-20 pt-10 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={classNames(
              tier.mostPopular
                ? 'border-2 border-primary'
                : 'ring-1 ring-gray-200',
              'bg-white rounded-3xl p-8'
            )}
          >
            <h2
              className={classNames(
                tier.mostPopular ? 'text-primary' : 'text-gray-900',
                'text-lg/8 font-semibold'
              )}
            >
              {tier.name}
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              {tier.price ? (
                <Fragment>
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">
                    heure
                  </span>
                </Fragment>
              ) : (
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  Sur devis
                </span>
              )}
            </p>
            <a
              href={tier.href}
              className={classNames(
                tier.mostPopular
                  ? 'bg-primary text-white shadow-sm hover:bg-primary/80'
                  : 'text-primary ring-1 ring-inset ring-primary hover:ring-primary',
                'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
              )}
            >
              Me contacter
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
