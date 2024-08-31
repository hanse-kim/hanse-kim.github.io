import React from 'react';
import { NavButton } from '../layout/header/nav-button';

type BackButtonProps = {};

export const BackButton = ({}: BackButtonProps) => {
  return (
    <div className="ml-24 -mb-24 mt-36 w-fit">
      <NavButton toBack>{'< 이전 페이지로'}</NavButton>
    </div>
  );
};
