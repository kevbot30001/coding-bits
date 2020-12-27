import React from 'react';
import PropTypes from "prop-types";

import * as S from "./section-pagination.styles";

const SectionPaginationLink = ({ to, title, direction }) => {
    if(direction==="left"){
        return (
            <S.SectionPaginationLink to={to} className="left">
                {title}
            </S.SectionPaginationLink>
        )
    }else{
        return (
            <S.SectionPaginationLink to={to} className="right">
                {title}
            </S.SectionPaginationLink>
        )
    }
}

const SectionPagination = ({ index, indexList }) => {
    if(index > 0 && index < indexList.length-1){
        let adjacentIndexes = indexList.filter(indexItem => (
                indexItem.node.frontmatter.sectionIndex === index-1 ||
                indexItem.node.frontmatter.sectionIndex === index+1
            )
        );
        if(adjacentIndexes.length!==2){console.error('Invalid index, please make sure all sections are indexed properly.')}
        return (
            <S.SectionPagination>
                <SectionPaginationLink to={adjacentIndexes[0].node.frontmatter.path} title={adjacentIndexes[0].node.frontmatter.title} direction="left"/>
                <SectionPaginationLink to={adjacentIndexes[1].node.frontmatter.path} title={adjacentIndexes[1].node.frontmatter.title} direction="right"/>
            </S.SectionPagination>
        )
    }else if(index===indexList.length-1){
        let adjacentIndexes = indexList.filter(indexItem => (
                indexItem.node.frontmatter.sectionIndex === index-1
            )
        );
        if(adjacentIndexes.length!==1){console.error('Invalid index, please make sure all sections are indexed properly.')}
        return (
            <S.SectionPagination className="single-left">
                <SectionPaginationLink to={adjacentIndexes[0].node.frontmatter.path} title={adjacentIndexes[0].node.frontmatter.title} direction="left"/>
            </S.SectionPagination>
        )
    }else{
        let adjacentIndexes = indexList.filter(indexItem => (
                indexItem.node.frontmatter.sectionIndex === index+1
            )
        );
        if(index !== 0 || adjacentIndexes.length!==1){console.error('Invalid index, please make sure all sections are indexed properly.')}
        return (
            <S.SectionPagination className="single-right">
                <SectionPaginationLink to={adjacentIndexes[0].node.frontmatter.path} title={adjacentIndexes[0].node.frontmatter.title} direction="right"/>
            </S.SectionPagination>
        )
    }
}

SectionPagination.propTypes = {
    index: PropTypes.number,
    indexList: PropTypes.array
}

export default SectionPagination;