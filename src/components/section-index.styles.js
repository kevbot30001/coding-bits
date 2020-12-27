import styled from "styled-components";
import { Link } from "gatsby";

export const SectionItem = styled.div`
    display: flex;
`;

export const SectionItemSection = styled.div`
    margin-bottom: 1rem;
`;

export const SectionItemSectionTitle = styled.div`
    color: #8e9dab;
    padding: 0.6rem 1.2rem;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    font-size: 0.9rem;
    font-weight: 700;
`;

export const SectionItemLink = styled(Link)`
    display: flex;
    color: #48494B;
    text-decoration: none;
    flex: 1;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    max-width: 100%;
    transition: background-color 0.05s ease-in;
    &:hover{
        background-color: #E6EDF2;
        transition: background-color 0.05s ease-in;
    }
    svg{
        fill: #48494B; 
    }
    overflow-x: hidden;
`;

export const SectionItemLinkActiveStyle = {
    color: "black",
    backgroundColor: "white",
    borderLeft: "1px solid #e1e8ed",
    borderTop: "1px solid #e1e8ed",
    borderBottom: "1px solid #e1e8ed"
};

export const SectionItemLinkContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const SectionItemLinkText = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const SectionItemLinkIcon = styled.div`
    padding-right: 0.75rem;
    display: flex;
    flex: 0;
    svg{
        margin: auto 0;
    }
`;

export const SectionIndex = styled.div`
    margin-top: 4rem;
    padding-left: 2rem;
`;

export const SectionIndexNav = styled.nav`
`;