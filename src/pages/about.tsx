import { type PageProps } from 'gatsby';
import React from 'react';
import { Seo } from 'src/components/common/seo';
import { AboutScreen } from 'src/components/screens/about-screen';

export const Head = (props: PageProps) => <Seo title="About" {...props} />;

const AboutPage = ({}: PageProps) => {
  return <AboutScreen />;
};

export default AboutPage;
