import {
  ShouldUpdateScrollArgs,
  WrapPageElementBrowserArgs,
  WrapRootElementBrowserArgs,
} from 'gatsby';
import React from 'react';
import { storageKeys } from './src/_libs/constants/storage-keys';
import { SessionStorageUtils } from './src/_libs/utils/storage.utils';
import { Layout } from './src/components/layout';
import { pageTransitionDuration } from './src/components/layout/page-transition';
import { PageProvider } from './src/contexts/page-context';
import './src/styles/global.css';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({
  props,
  element,
}: WrapRootElementBrowserArgs) => {
  if (
    props instanceof Object &&
    props !== null &&
    'path' in props &&
    typeof props['path'] === 'string'
  ) {
    return <PageProvider path={props.path}>{element}</PageProvider>;
  }

  return element;
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
