import { RouteUpdateArgs, ShouldUpdateScrollArgs } from 'gatsby';
import { storageKeys } from './src/_libs/constants/storage-keys';
import { sessionStorageUtils } from './src/_libs/utils/storage-utils';
import { pageTransitionDuration } from './src/components/layout/page-transition';
import './src/styles/global.css';

export { wrapPageElement } from './gatsby-shared';

export const onRouteUpdate = ({ prevLocation }: RouteUpdateArgs) => {
  sessionStorageUtils.set(storageKeys.prevPath, prevLocation?.pathname || null);
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}: ShouldUpdateScrollArgs) => {
  const isScrollUpdateDisabled = location.search !== '';

  if (!isScrollUpdateDisabled) {
    const currentPosition = getSavedScrollPosition(location);
    setTimeout(() => {
      window.scrollTo(...(currentPosition || [0, 0]));
    }, 1000 * pageTransitionDuration);
  }

  return false;
};
