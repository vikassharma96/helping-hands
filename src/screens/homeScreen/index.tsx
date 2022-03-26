import React from 'react';
import TopMenuBar from '../../components/topMenuBar';
import FooterMenuBar from '../../components/footerMenuBar';
import HomeCarousel from '../../components/carousel';

const HomeScreen: React.FC = (props: any) => {
  return (
    <div>
      <TopMenuBar />
      <HomeCarousel />
      <FooterMenuBar />
    </div>
  );
};

export default HomeScreen;
