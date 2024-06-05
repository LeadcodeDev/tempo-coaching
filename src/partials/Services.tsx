import { Fragment } from 'react';

import { GradientText } from '@/partials/GradientText';
import { Section } from '@/partials/Section';

export function Services() {
  const services = [
    {
      title: 'Personnalisé',
      description: (
        <Fragment>
          <p>
            J'accompagne jeunes et adultes, patients en arrêt de travail ou non,
            vers le mieux-être émotionnel, dans la recherche de sens à leur
            activité scolaire et professionnelle. J'accompagne jeunes et
            adultes, patients en arrêt de travail ou non, vers le mieux-être
            émotionnel, dans la recherche de sens à leur activité scolaire et
            professionnelle.
          </p>
          <p>
            Je propose un accompagnement personnalisé (individuel ou collectif)
            où je prends le temps d'écouter les personnes en mal de soi.
            L'intérêt étant que chacun puisse retrouver un équilibre pour son
            bien être mental et psychologique.
          </p>
          <p>
            La personne ne restera pas seule face à sa détresse. Elle aura le
            bénéfice de pouvoir l'exprimer et dépasser les freins en trouvant
            des solutions adaptées à son état du moment.
          </p>
        </Fragment>
      ),
    },
    {
      title: 'Au travail',
      description: (
        <Fragment>
          <p>
            J'interviens sur les notions de stress au travail, d'épuisement
            professionnel, les risques psychosociaux, sur les thématiques
            d'estime, de confiance en soi et d'amour de soi... en libérant les
            maux et les incertitudes par les mots et en accueillant les
            émotions. "Tout ce qui ne s'exprime pas, s'imprime ! ".
          </p>
        </Fragment>
      ),
    },
    {
      title: 'Craintes et blocages',
      description: (
        <Fragment>
          <p>
            Je dispose de techniques libératrices adaptées pour permettre à
            chacun de trouver en soi les clés de son mieux être, de retrouver du
            sens et des repères dans son quotidien.
          </p>
          <p>
            Je travaille sur les peurs, les blocages pour ne pas focaliser sur
            le passé, mais imaginer des possibles pour un présent et surtout un
            futur en adéquation avec les besoins et la quête de sens de chacun.
          </p>
        </Fragment>
      ),
    },
  ];

  return (
    <Section
      title={
        <Fragment>
          Mes <GradientText>accompagnements</GradientText>
        </Fragment>
      }
    >
      <div className="flex flex-col gap-6">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-x-8 rounded-lg border border-gray-200 bg-white p-5 md:flex-row"
            >
              <div className="flex flex-col gap-y-5">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <div className="flex flex-col gap-y-3">
                  {service.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
