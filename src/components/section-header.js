import React from "react";
import PropTypes from "prop-types";

import * as S from "./section-header.styles";

const SectionHeader = ({ moduleTitle, sectionTitle }) => (
    <S.SectionHeader>
        <S.ModuleTitle>
            {moduleTitle}
        </S.ModuleTitle>
        <S.SectionTitle>
            {sectionTitle}
        </S.SectionTitle>
    </S.SectionHeader>
)

SectionHeader.propTypes = {
    moduleTitle: PropTypes.string,
    sectionTitle: PropTypes.string
}

export default SectionHeader;