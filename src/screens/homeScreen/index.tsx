import React from 'react';
import TopMenuBar from '../../components/topMenuBar';
import FooterMenuBar from '../../components/footerMenuBar';

const HomeScreen: React.FC = (props: any) => {
  return (
    <div>
      <TopMenuBar />
      <FooterMenuBar />
    </div>
  );
};

export default HomeScreen;
