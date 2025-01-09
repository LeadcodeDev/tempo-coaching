import { CircleCheckBig } from 'lucide-react';

import SectionValue from '@/partials/SectionValue';

export function Services() {
  return (
    <div className="py-10">
      <SectionValue
        title="Mes services"
        subtitle="Accompagnement personnel"
        image="/assets/images/thumbnail_1.jpeg"
        content={{
          title: "Qu'est-ce que le coaching",
          description: (
            <div className="flex flex-col gap-5">
              <p>Le coaching n’est ni du conseil ni de la thérapie.</p>
              <p>
                Le coaching est l’accompagnement d’une personne ou d’un groupe
                sur une période définie vers un objectif spécifique.
              </p>
              <p className="-mb-5">
                Le professionnel coach a un rôle de guide, de partenaire dont
                l’objectif unique est de vous conduire vers la réalisation de
                VOTRE objectif en vous permettant de poser des étapes et de
                passer à l’action.
              </p>
            </div>
          ),
          items: [
            {
              icon: <CircleCheckBig />,
              title: '{titre 1}',
              description:
                'L’art du questionnement, sans jugement, en toute authenticité et bienveillance',
            },
            {
              icon: <CircleCheckBig />,
              title: 'L’exploration de votre singularité',
              description:
                'Vos talents, vos aspirations, votre perception du monde, vos besoins, vos valeurs…',
            },
            {
              icon: <CircleCheckBig />,
              title: "Retours d'expérience",
              description:
                'Les feedbacks sincères et bienveillants pour vous permettre de progresser vers votre objectif',
            },
            {
              icon: <CircleCheckBig />,
              title: '{titre 2}',
              description:
                'L’utilisation d’outils tirés de la programmation neurolinguistique PNL, de la Gestalt-Thérapie, de l’analyse transactionnelle, de la systémie, de l’arbre de vie etc…',
            },
          ],
        }}
      />

      <SectionValue
        inverted
        image="/assets/images/banc.png"
        content={{
          title: 'Accompagnements individuels',
          description: (
            <div className="flex flex-col gap-5">
              <p>
                J'accompagne jeunes et adultes, patients en arrêt de travail ou
                non, vers le mieux-être émotionnel, dans la recherche de sens à
                leur activité scolaire et professionnelle.
              </p>
            </div>
          ),
          items: [
            {
              icon: <CircleCheckBig />,
              title: 'Personnalisé',
              description: (
                <div className="flex flex-col gap-3">
                  <p>
                    Je propose un accompagnement personnalisé (individuel ou
                    collectif) où je prends le temps d'écouter les personnes en
                    mal de soi. L'intérêt étant que chacun puisse retrouver un
                    équilibre pour son bien être mental et psychologique.
                  </p>
                  <p>
                    La personne ne restera pas seule face à sa détresse. Elle
                    aura le bénéfice de pouvoir l'exprimer et dépasser les
                    freins en trouvant des solutions adaptées à son état du
                    moment.
                  </p>
                </div>
              ),
            },
            {
              icon: <CircleCheckBig />,
              title: 'Au travail',
              description: (
                <p>
                  J'interviens sur les notions de stress au travail,
                  d'épuisement professionnel, les risques psychosociaux, sur les
                  thématiques d'estime, de confiance en soi et d'amour de soi...
                  en libérant les maux et les incertitudes par les mots et en
                  accueillant les émotions. "Tout ce qui ne s'exprime pas,
                  s'imprime ! ".
                </p>
              ),
            },
            {
              icon: <CircleCheckBig />,
              title: 'Craintes et blocages',
              description: (
                <div className="flex flex-col gap-3">
                  <p>
                    Je dispose de techniques libératrices adaptées pour
                    permettre à chacun de trouver en soi les clés de son mieux
                    être, de retrouver du sens et des repères dans son
                    quotidien.
                  </p>
                  <p>
                    Je travaille sur les peurs, les blocages pour ne pas
                    focaliser sur le passé, mais imaginer des possibles pour un
                    présent et surtout un futur en adéquation avec les besoins
                    et la quête de sens de chacun.
                  </p>
                </div>
              ),
            },
          ],
        }}
      />

      <SectionValue
        image="/assets/images/meeting.png"
        content={{
          title: 'Accompagnements meeting',
          description: (
            <div className="flex flex-col gap-5">
              <p>
                Différents types d'accompagnements collectifs : conférences,
                groupes d'échanges
              </p>
              <p>
                Conférences grand public pour informer sur la santé mentale en
                entreprise et les risques sur la santé d’un épuisement
                professionnel
              </p>

              <div className="mt-10">
                <img
                  src="/assets/images/collectif.png"
                  alt="Meeting"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          ),
          items: [],
        }}
      />

      <SectionValue
        inverted
        image="/assets/images/entreprise.png"
        content={{
          title: 'Auprès des entreprises',
          description: (
            <div className="flex flex-col gap-5">
              <p>
                Régulation d’équipe ou médiation pour libérer la parole, aider à
                identifier les non-dits et restaurer une communication sereine
                et constructive au sein de l’équipe.
              </p>
              <p>
                Pour prendre une nouvelle fonction, pour dépasser un obstacle
                professionnel, pour optimiser la coopération interpersonnelle
                dans le cadre d’un conflit au sein d’une équipe, pour gérer un
                stress, pour s’interroger sur ses valeurs, pour prévenir un
                épuisement personnel
              </p>
              <div className="flex flex-col gap-5">
                <p>
                  Vous pouvez me retrouver dans le catalogue de formation ELP.
                </p>
                <div>
                  <a
                    href="/assets/formation_elp.pdf"
                    className="rounded bg-primary px-3 py-2 text-white hover:bg-primary/80"
                    download
                  >
                    Télécharger le document
                  </a>
                </div>
              </div>
              <p className="-mb-5 pt-5 italic">
                👉 Le coaching professionnel permet aux collaborateurs :
              </p>
            </div>
          ),
          items: [
            {
              icon: <CircleCheckBig />,
              title: '',
              description:
                'Développer des qualités ou apprivoiser des aspects pour atteindre des objectifs',
            },
            {
              icon: <CircleCheckBig />,
              title: '',
              description:
                'Lever des freins pour accéder à la confiance en soi',
            },
            {
              icon: <CircleCheckBig />,
              title: '',
              description: 'Apaiser la charge émotionnelle et mentale',
            },
            {
              icon: <CircleCheckBig />,
              title: '',
              description: 'Comprendre et éviter l’épuisement professionnel',
            },
            {
              icon: <CircleCheckBig />,
              title: '',
              description:
                ' Mettre en place une organisation personnelle efficace au quotidien',
            },
            {
              icon: <CircleCheckBig />,
              title: '',
              description:
                ' Reprendre le contrôle de son temps et gérer le stress du quotidien',
            },
          ],
        }}
      />
    </div>
  );
}
