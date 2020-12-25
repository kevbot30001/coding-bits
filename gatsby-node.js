/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                            module
                        }
                    }
                }
            }
        }
    `)
    if (result.errors) {
        reporter.panicOnBuild('ERROR: Loading "createPages" query')
    }
    // Create blog post pages.
    const posts = result.data.allMdx.edges
    // you'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
        createPage({
            path: node.frontmatter.path,
            // This component will wrap our MDX content
            component: path.resolve(`./src/templates/module-page.js`),
            context: { id: node.id, module: node.frontmatter.module },
        })
    })
}