import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from "./landing-banner.styles";
import ContainerFixed from "./container-fixed";

const LandingBanner = () => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "banner-snow.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const imgData = data.desktop.childImageSharp.fluid;

    return (
        <S.LandingBanner Tag="section" fluid={imgData} backgroundColor={`#32687f`}>
            <ContainerFixed>
                <S.BannerContent>
                    <h1 className="banner-title">Le code, facilement.</h1>
                </S.BannerContent>
            </ContainerFixed>
        </S.LandingBanner>
    )
}

export default LandingBanner;