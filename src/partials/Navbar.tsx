import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';

import { Logo } from '@/partials/Logo';
import { NavMenuItem } from '@/partials/NavMenuItem';

export function Navbar() {
  return (
    <Section>
      <NavbarTwoColumns>
        <a href="/">
          <Logo icon={<span></span>} name="Temp'ô coaching" />
        </a>

        <NavMenu>
          <NavMenuItem href="/">Portfolio</NavMenuItem>
          <NavMenuItem href="/posts/">Articles</NavMenuItem>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
}
