import React from 'react';
import { Logo } from './logo';
import { NavButton } from './nav-button';
import { routes } from 'src/_libs/constants/routes';
import { DarkModeButton } from './dark-mode-button';
import { ScrollProgress } from './scroll-progress';
import { usePage } from 'src/contexts/page-context';

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const { path } = usePage();
  const hasScrollProgress = path.startsWith('/20');

  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between px-32 border-solid h-header-height bg-bg border-b-1 border-border">
      <Logo />
      <nav className="flex items-center gap-20">
        <NavButton to={routes.blog}>Blog</NavButton>
        <NavButton to={routes.tags}>Tags</NavButton>
        <DarkModeButton />
      </nav>
      {hasScrollProgress && (
        <ScrollProgress className="absolute left-0 right-0 w-full h-2 -bottom-2" />
      )}
    </header>
  );
};
