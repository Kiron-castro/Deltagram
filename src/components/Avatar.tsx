import React from 'react';
import styled, { css } from 'styled-components'

import {pickRandomColor} from '../services/tools';

const AvatarWrapper = styled.div`
border: 1px solid transparent;
border-radius: 200px;
width: 48px;
height: 48px;
text-align: center;
line-height: 48px;
font-size: 22px;
    
${props =>
    props.color &&
    css`
      background: ${props.color};
      color: white;
    `};
`

const Avatar=({userName}:{userName: string})=>{
    const firstLetter = userName.substring(0,1);
    const randomColor = pickRandomColor();
    return (
        <AvatarWrapper color={randomColor}>
            <span>{firstLetter}</span>
        </AvatarWrapper>
    )
}

export default Avatar;