import React from 'react';
import PropTypes from "prop-types";

import * as S from "./section-index.styles";

const SectionItem = ({ title, path }) => (
    <S.SectionItem>
        <S.SectionItemLink to={path} activeStyle={S.SectionItemLinkActiveStyle} partiallyActive={true}>
            {title}
        </S.SectionItemLink>
    </S.SectionItem>
)

const SectionIndex = ({ index }) => {
    return (
        <S.SectionIndex>
            <S.SectionIndexNav>
                {index
                    .filter(section => section.node.frontmatter.title.length > 0)
                    .map(({ node: section }) => {
                        return (
                            <SectionItem key={section.id} title={section.frontmatter.title} path={section.frontmatter.path}>
                                section
                            </SectionItem>
                        )
                    })
                }
            </S.SectionIndexNav>
        </S.SectionIndex>
    )
}

SectionItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string
}

SectionIndex.propTypes = {
    index: PropTypes.array,
}

export default SectionIndex;