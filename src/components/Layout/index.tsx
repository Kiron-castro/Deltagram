import React from 'react';
import { Container, Wrapper, } from './styles';
import Main from   '../Main';

const Layout: React.FC = () => {
  return (
      <Container>
          <Wrapper>
             <Main /> 
             {/* <SideBar></SideBar> */}
          </Wrapper>
      </Container>
  );
}

export default Layout;