import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from 'react-scrollspy'

export const SectionHiddenTOC = styled.div`
    display: none;
`

export const SectionTOC = styled.div`
    position: fixed;
    margin-top: 4rem;
    border-left: 1px solid #e1e8ed;
`

export const TOCTitle = styled.div`
    display: flex;
    color: #9DAAB6;
    padding-left: 1.3rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
    font-size: 0.7rem;
    .icon{
        margin-right: 0.4rem;
    }
    svg{
        fill: #9DAAB6; 
    }
`

export const TOCList = styled(Scrollspy)`
    list-style-type: none;
    margin-top: 0rem;
    margin-left: -1px;
    margin-bottom: 0rem;
`

export const TOCItem = styled.li`
    position: relative;
    color: #74818D;
    margin: 0;
    max-width: 224px;
    font-size: 0.85rem;
    font-weight: 600;
    overflow-x: hidden;
    padding-right: 1.3rem;
    //padding-left: 1.3 rem base with 0.85rem increments
    &.is-current{
        color: black;
        &::before{
            left: 0px;
            height: 100%;
            content: " ";
            position: absolute;
            border-left: 2px solid;
        }
    }
`

export const TOCItemLink = styled(AnchorLink)`
    text-decoration: none;
    color: inherit;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`