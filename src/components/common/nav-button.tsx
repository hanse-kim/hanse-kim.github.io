import { Link } from 'gatsby';
import React from 'react';
import { Route } from 'src/_libs/constants/routes';

type NavButtonProps = {
  children?: React.ReactNode;
  isActive?: boolean;
} & (
  | {
      to: Route | string;
      onClick?: undefined;
    }
  | { to?: undefined; onClick: () => void }
);

export const NavButton = ({
  children,
  to,
  onClick,
  isActive,
}: NavButtonProps) => {
  const styles =
    'inline-block cursor-pointer w-fit text-18-300-footer drop-shadow-transparent transition-shadow disabled:cursor-default desktop:hover:drop-shadow-text desktop:hover:text-text data-[active=true]:drop-shadow-text data-[active=true]:text-text after:block after:w-full after:h-[1px] after:bg-text after:scale-x-0 desktop:hover:after:scale-x-100 after:transition-transform after:data-[active=true]:scale-x-100';

  if (onClick) {
    return (
      <button className={styles} onClick={onClick} data-active={isActive}>
        {children}
      </button>
    );
  }

  return (
    <Link className={styles} to={`${to}`} data-active={isActive}>
      {children}
    </Link>
  );
};
