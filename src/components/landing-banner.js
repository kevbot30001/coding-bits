import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from "./landing-banner.styles";
import ContainerFixed from "./container-fixed";

const LandingBanner = () => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "banner-black-sand.jpg" }) {
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
        <S.LandingBanner Tag="section" fluid={imgData} backgroundColor={`#131313`}>
            <ContainerFixed>
                <S.BannerContent>
                    <h1 className="banner-title">Le code, facilement.</h1>
                    <p className="banner-subtitle">Une multitude de modules à votre disposition pour explorer le monde de la programmation facilement et intuitivement.</p>             
                </S.BannerContent>
            </ContainerFixed>
        </S.LandingBanner>
    )
}

export default LandingBanner;