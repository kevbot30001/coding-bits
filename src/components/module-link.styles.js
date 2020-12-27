import styled from "styled-components";

export const ModuleLinkBox = styled.div`
    color: #2F2F30;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: #CAD0D5;
    background-color: white;
    display: flex;
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 1.25rem;
    transition: color 0.1s ease-in;
    transition: border-color 0.1s ease-in;
    svg{
        transition: fill 0.1s ease-in;
        fill: #48494B;
    }
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
`

export const ModuleLinkContent = styled.div`
    flex: 1;
`

export const ModuleLinkTitle = styled.h3`
    color: inherit;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
`

export const ModuleLinkDescription = styled.p`
    margin-bottom: 0;
`

export const ModuleLinkIcon = styled.div`
    display: flex;
    flex: 0;
    svg{
        margin: auto 0;
    }
`