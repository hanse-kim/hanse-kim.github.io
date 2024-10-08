import { PageProps } from 'gatsby';
import React, { lazy, Suspense } from 'react';
import { PageProvider } from 'src/contexts/page-context';
import { useIsMounted } from 'src/hooks/use-is-mounted';
import { PlainLayout } from './plain-layout';
const MotionLayout = lazy(() =>
  import('./motion-layout').then((module) => ({ default: module.MotionLayout }))
);

type LayoutProps = {
  pageProps: Omit<PageProps, 'children'>;
  children: React.ReactElement;
};

export const Layout = ({ children, pageProps }: LayoutProps) => {
  const { isMounted } = useIsMounted();

  return (
    <PageProvider pageProps={pageProps}>
      {isMounted ? (
        <Suspense fallback={<PlainLayout>{children}</PlainLayout>}>
          <MotionLayout>{children}</MotionLayout>
        </Suspense>
      ) : (
        <PlainLayout>{children}</PlainLayout>
      )}
    </PageProvider>
  );
};
