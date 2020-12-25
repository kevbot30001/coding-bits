import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from 'react-scrollspy'

export const SectionTOC = styled.div`
    position: fixed;
    margin-top: 4rem;
    border-left: 1px solid #e1e8ed;
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
    font-size: 0.85rem;
    font-weight: 600;
    overflow: hidden;
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
`