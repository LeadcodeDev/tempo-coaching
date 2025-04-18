import CalendlyIcon from '@/icons/CalendlyIcon';
import { EmailIcon } from '@/icons/EmailIcon';
import { PhoneIcon } from '@/icons/PhoneIcon';
import { Section } from '@/partials/Section';

const CTA = () => (
  <Section id="contact">
    <div className="sm:py-10 md:px-0">
      <div className="relative isolate overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/75 px-6 py-10 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Je suis présente pour vous.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Contactez-moi dès aujourd'hui pour commencer votre voyage vers une
          meilleure santé mentale.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="mailto:coaching.tempo@gmail.com?subject=Demande d'informations"
            className="inline-flex items-center gap-x-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <EmailIcon />
            Email
          </a>
          <a
            href="tel:0761031902"
            className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
          >
            <PhoneIcon />
            Téléphone
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
          >
            <CalendlyIcon />
            Calendly
          </a>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#2B8D59" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </Section>
);

export { CTA };
