import React from 'react';
import { Container, SideBar, TopBar, TopMain, MainWrapper  } from '../Layout/template';

const Main: React.FC = () => {
  return (
      <Container>
           <TopBar />

           <MainWrapper>

                <SideBar />

                <TopMain />
           </MainWrapper>
      </Container>
  );
}

export default Main;
