import React from 'react';
import PropTypes from "prop-types";

import * as S from "./section-index.styles";

import ArrowLeft from "../svg/arrow-left.svg";

const SectionItem = ({ title, path }) => (
    <S.SectionItem>
        <S.SectionItemLink to={path} activeStyle={S.SectionItemLinkActiveStyle} partiallyActive={true}>
            <S.SectionItemLinkText>
                {title}
            </S.SectionItemLinkText>
        </S.SectionItemLink>
    </S.SectionItem>
)

const SectionBackItem = ({ title, path }) => (
    <S.SectionItem>
        <S.SectionItemLink to={path}>
            <S.SectionItemLinkIcon>
                <ArrowLeft/>
            </S.SectionItemLinkIcon>
            <S.SectionItemLinkContent>
                {title}
            </S.SectionItemLinkContent>
        </S.SectionItemLink>
    </S.SectionItem>
)

const SectionIndex = ({ index }) => {
    return (
        <S.SectionIndex>
            <S.SectionIndexNav>
                <S.SectionItemSection>
                    <SectionBackItem path="/" title="Modules"/>
                </S.SectionItemSection>
                <S.SectionItemSectionTitle>SECTIONS</S.SectionItemSectionTitle>
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