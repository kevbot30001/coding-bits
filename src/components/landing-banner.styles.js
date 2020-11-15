import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image';

export const LandingBanner = styled(BackgroundImage)`
    width: 100%;
    background-position: bottom center;
    background-size: cover;
`

export const BannerContent = styled.div`
    padding: 10vw 0vw;
    .banner-title{
        color: white;
        font-weight: 900;
        font-size: 4rem;
    }
    .banner-subtitle{
        color: white;
        font-size: large;
        font-weight: 500;
    }
`