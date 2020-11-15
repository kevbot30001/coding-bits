import React from "react";
import PropTypes from "prop-types";

import * as S from "./page-section.styles";

const PageSection = ({ title, children }) => (
    <S.SectionWrapper>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.SectionContent>
            {children}
        </S.SectionContent>
    </S.SectionWrapper>
)

PageSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

PageSection.defaultProps = {
    title: ``,
}

export default PageSection;