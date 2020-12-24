import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageColumnWrapper from '../components/page-column-wrapper';
import PageLeftWrapper from '../components/page-left-wrapper';
import PageMiddleWrapper from '../components/page-middle-wrapper';
import PageRightWrapper from '../components/page-right-wrapper';
import SectionIndex from '../components/section-index';
import SectionHeader from "../components/section-header";
import SectionSidebar from '../components/section-sidebar';
import SectionContentWrapper from '../components/section-content-wrapper';
import { Link } from "gatsby"

const shortcodes = { Link }; // Common components here

export default function Template({ data }){
    return (
        <Layout>
            <SEO title={data.post.frontmatter.title}/>
            <PageColumnWrapper>
                <PageLeftWrapper>
                    <SectionSidebar>
                        <SectionIndex index={data.sectionIndexList.edges}/>
                    </SectionSidebar>
                </PageLeftWrapper>
                <PageMiddleWrapper>
                    <SectionContentWrapper>
                        <SectionHeader moduleTitle={data.post.frontmatter.moduleTitle} sectionTitle={data.post.frontmatter.title}/>
                        <MDXProvider components={shortcodes}>
                            <MDXRenderer>{data.post.body}</MDXRenderer>
                        </MDXProvider>
                        <Link to="/">Retour</Link>
                    </SectionContentWrapper>
                </PageMiddleWrapper>
                <PageRightWrapper></PageRightWrapper>
            </PageColumnWrapper>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String, $module: String) {
        post: mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                path
                date
                module
                moduleIndex
                moduleTitle
                title
                sectionIndex
            }
        }
        sectionIndexList: allMdx(filter: {frontmatter: {module: {eq: $module}}} sort: {fields: frontmatter___sectionIndex, order: ASC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        sectionIndex
                        path
                    }
                }
            }
        }
    }
`