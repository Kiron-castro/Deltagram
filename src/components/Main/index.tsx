import React, {useState} from 'react';
import { Container, SideBar, TopBar, TopMain, MainWrapper  } from '../Layout/template';

const Main: React.FC = () => {
     const [isMenuHidden, setIsMenuHidden]=useState(true);

     const onClickMenu = ()=>{
          setIsMenuHidden(!isMenuHidden);
     }

  return (
      <Container>
           <TopBar onClickMenu={onClickMenu} />

           <MainWrapper>

                <SideBar hidden={isMenuHidden} />

                <TopMain />
           </MainWrapper>
      </Container>
  );
}

export default Main;
