import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { SessionStorageUtils } from './src/_libs/utils/storage.utils';
import { Layout } from './src/components/layout';
import './src/styles/global.css';
import { storageKeys } from './src/_libs/constants/storage-keys';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onRouteUpdate = ({ prevLocation }) => {
  SessionStorageUtils.set(storageKeys.prevPath, prevLocation?.pathname || null);
};
