import { ShouldUpdateScrollArgs, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { SessionStorageUtils } from './src/_libs/utils/storage.utils';
import { Layout } from './src/components/layout';
import './src/styles/global.css';
import { storageKeys } from './src/_libs/constants/storage-keys';
import { pageTransitionDuration } from './src/components/layout/page-transition';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onRouteUpdate = ({ prevLocation }) => {
  SessionStorageUtils.set(storageKeys.prevPath, prevLocation?.pathname || null);
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}: ShouldUpdateScrollArgs) => {
  const currentPosition = getSavedScrollPosition(location);
  setTimeout(() => {
    window.scrollTo(...(currentPosition || [0, 0]));
  }, 1000 * pageTransitionDuration);

  return false;
};
