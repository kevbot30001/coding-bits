import React from "react";
import PropTypes from "prop-types";

import ContainerFixed from "./container-fixed";
import * as S from "./header.styles";

const Header = ({ siteTitle, link }) => (
	<S.HeaderWrapper>
		<ContainerFixed>
			<S.HeaderColumnWrapper>
				<S.HeaderLeftWrapper>
					<S.HeaderBrand to={link}>
						<S.BrandName>{siteTitle}</S.BrandName>
					</S.HeaderBrand>
				</S.HeaderLeftWrapper>
				<S.HeaderMiddleWrapper>
				</S.HeaderMiddleWrapper>
				<S.HeaderRightWrapper>
				</S.HeaderRightWrapper>
			</S.HeaderColumnWrapper>
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
