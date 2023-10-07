import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Impulsione sua produção agrícola com os nossos adubos de qualidade."
      subtitle="Comece agora!"
      button={
        <Link href="/produtos">
          <Button>Conheça Nossos Produtos</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
