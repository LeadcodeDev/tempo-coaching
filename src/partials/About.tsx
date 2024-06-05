import { Section } from 'astro-boilerplate-components';

import { GradientText } from '@/partials/GradientText';

export function About() {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            <GradientText>A propos</GradientText> de moi
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-y-5">
        <p>
          Je m’appelle Magali DENIAUD et j’ai un super pouvoir, "celui de
          libérer les maux et les incertitudes par les mots".
        </p>
        <p>
          Autrefois professeur en lycées professionnels, j'accompagne
          aujourd'hui autrui vers le mieux être dans un objectif de reprise de
          confiance en lui. J'ai une expérience de trente ans dans
          l'accompagnement humain, en tant que travailleur social.
        </p>
        <div>
          <p>
            Animée par les relations interpersonnelles, je crois en la nature
            humaine.
          </p>
          <p>
            Je dispose de pré-requis, d'expériences de terrain et de formations
            complémentaires qui me valent une légitimité en tant que
            Consultante, Coach en Santé mentale et bien être émotionnel.
          </p>
        </div>
      </div>
    </Section>
  );
}
