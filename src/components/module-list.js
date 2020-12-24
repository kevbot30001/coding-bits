import React from "react";
import { useStaticQuery,graphql } from "gatsby";

import ModuleLink from "./module-link";
import * as S from "./module-list.styles";

const ModuleList = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMdx(filter: {frontmatter: {sectionIndex: {eq: 0}}}, sort: {fields: frontmatter___moduleIndex, order: ASC}) {
                    edges {
                        node {
                            id
                            excerpt
                            frontmatter {
                                date
                                moduleTitle
                                moduleIndex
                                path
                            }
                        }
                    }
                }
            }
        `
    )

    let modules = data.allMdx.edges;

    return (
        <S.ModuleList>
            {modules
                .filter(mod => mod.node.frontmatter.moduleTitle.length > 0)
                .map(({ node: mod }) => {
                    return (
                        <ModuleLink key={mod.id} title={mod.frontmatter.moduleTitle} path={mod.frontmatter.path}>
                            {mod.excerpt}
                        </ModuleLink>
                    )
                })
            }
        </S.ModuleList>
    )
}

export default ModuleList;