import styled from "styled-components";
import { Link } from "gatsby";

export const SectionPagination = styled.div`
    display: grid;
    column-gap: 24px;
    grid-template-rows: auto;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 1fr;
    &.single-left{
        grid-template-areas: "left";
        grid-template-columns: 1fr;
    }
    &.single-right{
        grid-template-areas: "right";
        grid-template-columns: 1fr;
    }
`;

export const SectionPaginationLink = styled(Link)`
    border: 1px solid #CAD0D5;
    border-radius: 2px;
    color: #48494B;
    padding: 1.25rem;
    place-self: stretch;
    text-decoration: none;  
    font-weight: 600;
    &.left{
        grid-area: "left";
        text-align: right;
    }
    &.right{
        grid-area: "right";
        text-align: left;
    }
    transition: color 0.1s ease-in;
    transition: border-color 0.1s ease-in;
    &:hover{
        transition: color 0.1s ease-in;
        transition: border-color 0.1s ease-in;
        color: black;
        border-color: black;
    }
`;