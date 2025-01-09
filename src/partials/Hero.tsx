import { HeroAvatar } from 'astro-boilerplate-components';

import CalendlyIcon from '@/icons/CalendlyIcon';
import { FacebookIcon } from '@/icons/FacebookIcon';
import { InstagramIcon } from '@/icons/InstagramIcon';
import { LinkedinIcon } from '@/icons/LinkedinIcon';
import { WhatsAppIcon } from '@/icons/WhatsAppIcon';
import { GradientText } from '@/partials/GradientText';
import { Section } from '@/partials/Section';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <div className="-mt-10 md:mt-0">
          <p className="font-caveat text-5xl">
            Bienvenue chez Temp'ô coaching,
          </p>
          <p className="font-caveat text-5xl">
            Je m'appelle{' '}
            <GradientText className="pr-1">Magali Deniaud</GradientText> 👋
          </p>
          <p className="pt-3 text-base font-medium">
            Consultante en <GradientText>santé mentale</GradientText> et{' '}
            <GradientText>bien être émotionnel</GradientText>
          </p>
        </div>
      }
      description={
        <div className="flex flex-col gap-y-5">
          <p>
            Fort d'une expérience de 30 ans dans le domaine de l'accompagnement
            humain et animée par les relations interpersonnelles, j'accompagne
            autrui vers le mieux être dans un objectif de reprise de confiance
            en lui.
          </p>
        </div>
      }
      avatar={
        <div className="relative mt-10 md:mt-0">
          <div className="absolute inset-0 w-64 rotate-[10deg] rounded-lg bg-gradient-to-r from-primary to-primary/65 md:w-80"></div>
          <div className="absolute inset-0 w-64 rounded-lg bg-white md:w-80"></div>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="z-1 relative rounded-lg bg-primary/30">
            <img
              className="w-64 object-cover md:w-80"
              src="/assets/images/avatar.png"
              alt="Avatar image"
              loading="lazy"
            />
          </div>
        </div>
      }
      socialButtons={
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/magali-deniaud-0604a716a"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="sr-only">Linkedin</span>
            <LinkedinIcon />
          </a>
          <a
            href="https://www.instagram.com/tempocoaching.magalideniaud"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/TempoCoachingMagaliDeniaud"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon />
          </a>
          <a href="tel:0761031902">
            <span className="sr-only">Whatsapp</span>
            <WhatsAppIcon />
          </a>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center gap-x-1 rounded bg-blue-500 text-sm font-semibold leading-6 text-white"
          >
            <span className="sr-only">Calendly</span>
            <CalendlyIcon />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
