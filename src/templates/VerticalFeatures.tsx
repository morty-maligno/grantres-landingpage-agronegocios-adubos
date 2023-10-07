import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Benefícios dos Nossos Adubos Agrícolas"
    description="Descubra por que os nossos adubos são a escolha ideal para impulsionar o crescimento e a produtividade das suas culturas."
  >
    <VerticalFeatureRow
      title="Fórmula 10-30-10 - Para um Crescimento Robusto e Flores Deslumbrantes"
      description="Nossa fórmula de adubo 10-30-10 é a chave para um jardim exuberante e flores deslumbrantes. Com 10% de Nitrogênio, 30% de Fósforo e 10% de Potássio, este adubo é um impulsionador essencial para o crescimento saudável das raízes das plantas e o desenvolvimento exuberante das flores. As raízes se fortalecem, tornando as plantas mais resistentes a estresses ambientais, enquanto as flores se destacam com cores vibrantes e uma floração exuberante. Garanta um jardim deslumbrante e saudável com nossa fórmula 10-30-10."
      image="/assets/images/nutrientes.svg"
      imageAlt="Nutrientes Essenciais"
    />
    <VerticalFeatureRow
      title="Fórmula 08-40-08 - Estimule a Floração e Frutificação com Sucesso"
      description="Nossa fórmula de adubo 08-40-08 é a escolha ideal para quem busca uma colheita abundante e flores exuberantes. Com 8% de Nitrogênio, 40% de Fósforo e 8% de Potássio, este adubo é projetado especificamente para estimular a floração e a frutificação das plantas. O alto teor de Fósforo promove a formação de botões florais e o desenvolvimento saudável das frutas. As plantas florescem em todo o seu esplendor, produzindo colheitas saudáveis e abundantes. Transforme seu jardim em um oásis de flores e frutos com nossa fórmula 08-40-08."
      image="/assets/images/resultados.svg"
      imageAlt="Resultados Comprovados"
      reverse
    />
    <VerticalFeatureRow
      title="Fórmula 00-00-60 - Fortaleça suas Plantas e Desenvolva Frutos de Qualidade"
      description="Nossa fórmula de adubo 00-00-60 é a escolha quando se trata de fortalecer suas plantas e produzir frutos de qualidade. Com zero Nitrogênio e zero Fósforo, mas com um impressionante 60% de Potássio, este adubo é projetado para melhorar a resistência das plantas e o desenvolvimento de frutos. O Potássio desempenha um papel fundamental na resistência a pragas e doenças, enquanto também contribui para a formação de frutos saudáveis e saborosos. Fortaleça suas plantas e colha frutos de qualidade superior com nossa fórmula 00-00-60."
      image="/assets/images/sustentabilidade.svg"
      imageAlt="Sustentabilidade"
    />
  </Section>
);

export { VerticalFeatures };
