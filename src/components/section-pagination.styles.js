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
    display: flex;
    border: 1px solid #CAD0D5;
    border-radius: 2px;
    color: #48494B;
    padding: 1.25rem;
    place-self: stretch;
    text-decoration: none;  
    font-weight: 600;
    svg{
        transition: fill 0.1s ease-in;
        fill: #48494B;
    }
    &.left{
        .text{
            justify-content: flex-end;
        }
        .icon{
            padding-right: 1.25rem;
        }
        grid-area: "left";
    }
    &.right{
        .text{
            justify-content: flex-start;
        }
        .icon{
            padding-left: 1.25rem;
        }
        grid-area: "right";
    }
    transition: color 0.1s ease-in;
    transition: border-color 0.1s ease-in;
    &:hover{
        transition: color 0.1s ease-in;
        transition: border-color 0.1s ease-in;
        color: black;
        border-color: black;
        svg{
            transition: fill 0.1s ease-in;
            fill: black;
        }
    }
`;

export const SectionPaginationIcon = styled.div`
    display: flex;
    flex: 0;
    svg{
        margin: auto 0;
    }
`;

export const SectionPaginationContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;