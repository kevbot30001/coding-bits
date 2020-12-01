import React from "react";
import PropTypes from "prop-types";

import * as S from "./module-header.styles";

const ModuleTitle = ({ index, title }) => {
    if(index===0){
        return <S.ModuleTitle>{title}</S.ModuleTitle>
    }
}

const ModuleHeader = ({ index, moduleTitle, sectionTitle }) => (
    <ModuleTitle index={index} title={moduleTitle}/>
)

ModuleHeader.propTypes = {
    index: PropTypes.number,
    moduleTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
}

export default ModuleHeader;