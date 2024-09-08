import React from 'react';
import { routes } from 'src/_libs/constants/routes';
import { usePage } from 'src/contexts/page-context';
import { DarkModeButton } from './dark-mode-button';
import { Logo } from './logo';
import { NavButton } from './nav-button';
import { ScrollProgress } from './scroll-progress';

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const { pageProps } = usePage();
  const hasScrollProgress = pageProps.location.pathname.startsWith('/20');

  const navButtons = (
    <>
      <NavButton
        to={routes.about}
        isActive={pageProps.location.pathname === routes.about}
      >
        About
      </NavButton>
      <NavButton
        to={routes.blog}
        isActive={pageProps.location.pathname === routes.blog}
      >
        Blog
      </NavButton>
      <NavButton
        to={routes.tags}
        isActive={pageProps.location.pathname.startsWith(routes.tags)}
      >
        Tags
      </NavButton>
    </>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex flex-col items-stretch border-solid bg-bg border-b-1 border-border">
      <div className="flex items-center justify-between h-header-height px-32">
        <Logo />
        <div className="flex items-center gap-20">
          <nav className="flex items-center gap-20 mobile:hidden">
            {navButtons}
          </nav>
          <nav className="flex items-center gap-20">
            <DarkModeButton />
          </nav>
        </div>
        {hasScrollProgress && (
          <ScrollProgress className="absolute left-0 right-0 w-full h-2 -bottom-2" />
        )}
      </div>
      <div className="hidden mobile:flex justify-around items-center pb-16">
        {navButtons}
      </div>
    </header>
  );
};
