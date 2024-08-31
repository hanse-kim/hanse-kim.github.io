import React from 'react';
import { Layout } from 'src/components/layout';

type NotFoundScreenProps = {};

export const NotFoundScreen = ({}: NotFoundScreenProps) => {
  return (
    <Layout>
      <section className="flex flex-col items-center w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-96-700">404</h1>
        <div className="text-24-400">페이지를 찾을 수 없습니다.</div>
      </section>
    </Layout>
  );
};
