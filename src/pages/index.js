import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContainerFixed from "../components/container-fixed";
import LandingBanner from "../components/landing-banner";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <LandingBanner/>
    <ContainerFixed>
      Jude
    </ContainerFixed>
  </Layout>
)

export default IndexPage
