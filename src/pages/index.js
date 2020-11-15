import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContainerFixed from "../components/container-fixed";
import LandingBanner from "../components/landing-banner";
import PageSection from "../components/page-section";
import ModuleList from "../components/module-list";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <LandingBanner/>
    <ContainerFixed>
      <PageSection title="Modules">
        <ModuleList/>
      </PageSection>
    </ContainerFixed>
  </Layout>
)

export default IndexPage;
