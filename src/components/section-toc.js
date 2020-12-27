import React from "react";
import PropTypes from "prop-types";

import * as S from "./section-toc.styles";

function flattenTOC(items,depth=0) {
    let flattened = [];
    items.forEach(item => {
        let url = item.url;
        let title = item.title;
        if(item.items && item.items.length){
            flattened = flattened.concat(flattenTOC(item.items,depth+1));
            flattened.unshift({url,title,depth});
        }else{
            flattened.push({url,title,depth});
        }
    });
    return flattened;
}

const TOCList = ({ items, path }) => (
    <S.TOCList items={flattenTOC(items).map(item => item.url.substring(1))} currentClassName="is-current" offset={-15}>
        {flattenTOC(items).map(item => (
            <S.TOCItem key={item.url} style={{paddingLeft: `${0.85*(item.depth)+1.3}rem`}}>
                    <S.TOCItemLink to={path+item.url} title={item.title}>{item.title}</S.TOCItemLink>
            </S.TOCItem>

        ))}
    </S.TOCList>
)

const SectionTOC = ({ tableOfContents, path }) => (
        <S.SectionTOC>
            <TOCList items={tableOfContents.items} path={path}/>
        </S.SectionTOC>
)

TOCList.propTypes = {
    items: PropTypes.array,
    path: PropTypes.string
}

SectionTOC.propTypes = {
    tableOfContents: PropTypes.object,
    path: PropTypes.string
}

export default SectionTOC;