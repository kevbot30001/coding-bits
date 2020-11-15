import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import * as S from "./module-link.styles";

const ModuleLink = ({ children, title, path }) => (
    <S.ModuleLinkBox onClick={()=>navigate(path)}>
        <S.ModuleLinkTitle>
            {title}
        </S.ModuleLinkTitle>
        <S.ModuleLinkExerpt>
            {children}
        </S.ModuleLinkExerpt>
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
