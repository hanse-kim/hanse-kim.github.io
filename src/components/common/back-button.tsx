import React from 'react';
import { RouterUtils } from 'src/_libs/utils/router-utils';
import { NavButton } from './nav-button';

type BackButtonProps = {
  label?: string;
};

export const BackButton = ({ label = '이전 페이지로' }: BackButtonProps) => {
  return (
    <div className="ml-24 -mb-24 mt-36 w-fit">
      <NavButton onClick={RouterUtils.back}>{`< ${label}`}</NavButton>
    </div>
  );
};
