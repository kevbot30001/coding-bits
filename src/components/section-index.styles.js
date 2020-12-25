import styled from "styled-components";
import { Link } from "gatsby";

export const SectionItem = styled.div`
    display: flex;
`;

export const SectionItemLink = styled(Link)`
    color: #48494B;
    text-decoration: none;
    flex: 1;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: background-color 0.05s ease-in;
    &:hover{
        background-color: #E6EDF2;
        transition: background-color 0.05s ease-in;
    }
`;

export const SectionItemLinkActiveStyle = {
    color: "black",
    backgroundColor: "white",
    borderLeft: "1px solid #e1e8ed",
    borderTop: "1px solid #e1e8ed",
    borderBottom: "1px solid #e1e8ed"
};

export const SectionIndex = styled.div`
    margin-top: 4rem;
    padding-left: 2rem;
`;

export const SectionIndexNav = styled.nav`
`;