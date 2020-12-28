import React from "react";
import P5Wrapper from 'react-p5-wrapper';

import * as S from "./p5-wrapper.styles";

const P5WrapperElement = ({ ...props }) => (
    <S.P5WrapperBlock>
        <P5Wrapper {...props}/>
    </S.P5WrapperBlock>
)

export default P5WrapperElement;