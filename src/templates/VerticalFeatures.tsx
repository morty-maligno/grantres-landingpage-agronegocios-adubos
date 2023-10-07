import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Benefícios dos Nossos Adubos Agrícolas"
    description="Descubra por que os nossos adubos são a escolha ideal para impulsionar o crescimento e a produtividade das suas culturas."
  >
    <VerticalFeatureRow
      title="Nutrientes Essenciais"
      description="Nossos adubos são ricos em nutrientes essenciais, como Nitrogênio, Fósforo e Potássio, para garantir o desenvolvimento saudável das suas plantas."
      image="/assets/images/nutrientes.svg"
      imageAlt="Nutrientes Essenciais"
    />
    <VerticalFeatureRow
      title="Resultados Comprovados"
      description="Com anos de pesquisa e experiência, nossos adubos oferecem resultados comprovados, aumentando a produção e a qualidade das colheitas."
      image="/assets/images/resultados.svg"
      imageAlt="Resultados Comprovados"
      reverse
    />
    <VerticalFeatureRow
      title="Sustentabilidade"
      description="Comprometidos com a sustentabilidade, nossos adubos são formulados para minimizar o impacto ambiental, garantindo um cultivo responsável."
      image="/assets/images/sustentabilidade.svg"
      imageAlt="Sustentabilidade"
    />
  </Section>
);

export { VerticalFeatures };
