import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            Whatsapp
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Maximize sua colheita com a\n'}
            <span className="text-primary-500">Fórmula Perfeita de Adubos</span>
          </>
        }
        description="Descubra os melhores adubos agrícolas para impulsionar sua produção."
        button={
          <Link href="/produtos">
            <Button xl>Explore Nossos Produtos</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
