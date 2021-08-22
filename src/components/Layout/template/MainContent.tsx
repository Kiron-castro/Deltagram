import React from 'react';
import styled, { css } from 'styled-components';

const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;


const MainContent = ({children}:{children: JSX.Element[]})=>{

    return (
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    )
}

export default MainContent;
