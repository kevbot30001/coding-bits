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
import SectionTOC from '../components/section-toc';
import SectionPagination from '../components/section-pagination';

import BlockLink from '../components/block-link';
import CodeBlock from '../components/code-block';
import { Link } from "gatsby"

const shortcodes = { 
    Link, 
    BlockLink, 
    pre: preProps => {
        let props = preProps.children.props;
        return (
            <CodeBlock {...props}/>
        )
    }
};

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
                        <SectionPagination index={data.post.frontmatter.sectionIndex} indexList={data.sectionIndexList.edges}/>
                    </SectionContentWrapper>
                </PageMiddleWrapper>
                <PageRightWrapper>
                    <SectionTOC tableOfContents={data.post.tableOfContents} path={data.post.frontmatter.path}/>
                </PageRightWrapper>
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
            tableOfContents
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