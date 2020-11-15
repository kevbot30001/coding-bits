import React from "react";
import PropTypes from "prop-types";

import ContainerFixed from "./container-fixed";
import * as S from "./header.styles";

const Header = ({ siteTitle, link }) => (
  <S.HeaderWrapper>
    <ContainerFixed>
      <S.HeaderBrand to={link}>
        <S.BrandName>{siteTitle}</S.BrandName>
      </S.HeaderBrand>
    </ContainerFixed>
  </S.HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  link: `/`,
}

export default Header;
