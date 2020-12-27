import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import * as S from "./module-link.styles";

import ArrowRight from "../svg/arrow-right.svg";

const ModuleLink = ({ children, title, path }) => (
    <S.ModuleLinkBox onClick={()=>navigate(path)}>
        <S.ModuleLinkContent>
            <S.ModuleLinkTitle>
                {title}
            </S.ModuleLinkTitle>
            <S.ModuleLinkDescription>
                {children}
            </S.ModuleLinkDescription>
        </S.ModuleLinkContent>
        <S.ModuleLinkIcon>
            <ArrowRight/>
        </S.ModuleLinkIcon>
    </S.ModuleLinkBox>
)

ModuleLink.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    path: PropTypes.string,
}

ModuleLink.defaultProps = {
    title: ``,
    path: `/`,
}

export default ModuleLink;
