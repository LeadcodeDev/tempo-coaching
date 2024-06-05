import { HeroAvatar } from 'astro-boilerplate-components';
import { Fragment } from 'react';

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
        <Fragment>
          <p>Bienvenue chez Temp'ô coaching,</p>
          <p>
            Je m'appelle <GradientText>Magali Deniaud</GradientText> 👋
          </p>
          <p className="pt-3 text-base font-medium">
            Consultante en <GradientText>santé mentale</GradientText> et{' '}
            <GradientText>bien être émotionnel</GradientText>
          </p>
        </Fragment>
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
        <div className="relative">
          <div className="absolute inset-0 w-80 rotate-[10deg] rounded-lg bg-gradient-to-r from-primary to-primary/65"></div>
          <div className="absolute inset-0 w-80 rounded-lg bg-white"></div>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="z-1 relative rounded-lg bg-primary/30">
            <img
              className="w-80 object-cover"
              src="/assets/images/avatar.png"
              alt="Avatar image"
              loading="lazy"
            />
          </div>
        </div>
      }
      socialButtons={
        <Fragment>
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
        </Fragment>
      }
    />
  </Section>
);

export { Hero };
