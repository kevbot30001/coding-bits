import styled from "styled-components";
import { Link } from "gatsby";

export const BlockLink = styled(Link)`
    display: flex;
    border: 1px solid #CAD0D5;
    border-radius: 2px;
    color: #48494B;
    margin-bottom: 1.45rem;
    padding: 0.75rem 1.25rem;
    place-self: stretch;
    text-decoration: none;  
    font-weight: 600;
    svg{
        transition: fill 0.1s ease-in;
        fill: #48494B;
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

export const BlockLinkIcon = styled.div`
    display: flex;
    flex: 0;
    svg{
        margin: auto 0;
    }
`;

export const BlockLinkText = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;