import React from 'react';
import PropTypes from "prop-types";

import * as S from "./block-link.styles";

import ArrowRight from "../svg/arrow-right.svg";

const BlockLink = ({ to, title }) => (
    <S.BlockLink to={to}>
        <S.BlockLinkText>
            {title}
        </S.BlockLinkText>
        <S.BlockLinkIcon>
            <ArrowRight/>
        </S.BlockLinkIcon>
    </S.BlockLink>
)

BlockLink.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
}

export default BlockLink;