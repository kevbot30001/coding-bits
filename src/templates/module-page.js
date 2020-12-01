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
import ModuleHeader from "../components/module-header";
import { Link } from "gatsby"

const shortcodes = { Link }; // Common components here

export default function Template({ data : { mdx } }){
    return (
        <Layout>
            <SEO title={mdx.frontmatter.title}/>
            <PageColumnWrapper>
                <PageLeftWrapper></PageLeftWrapper>
                <PageMiddleWrapper>
                    <ModuleHeader index={mdx.frontmatter.index} moduleTitle={mdx.frontmatter.moduleTitle}/>
                    <h2>{mdx.frontmatter.title}</h2>
                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                    <Link to="/">Retour</Link>
                </PageMiddleWrapper>
                <PageRightWrapper></PageRightWrapper>
            </PageColumnWrapper>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                path
                date
                module
                moduleIndex
                moduleTitle
                title
                index
            }
        }
    }
`