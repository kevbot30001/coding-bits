import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from "gatsby"

const shortcodes = { Link }; // Common components here

function ModuleTitle(props){
    if(props.index==0){
        return <h1>{props.moduleTitle}</h1>
    }
}

export default function Template({ data : { mdx } }){
    return (
        <Layout>
            <div className="blog-post-container">
                <SEO title={mdx.frontmatter.title} />
                <ModuleTitle index={mdx.frontmatter.index} moduleTitle={mdx.frontmatter.moduleTitle}/>
                <h2>{mdx.frontmatter.title}</h2>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
                <Link to="/">Retour</Link>
            </div>
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