import styled from "styled-components";

export const ModuleLinkTitle = styled.h3`
    color: inherit;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
`

export const ModuleLinkExerpt = styled.p`
    margin-bottom: 0;
`

export const ModuleLinkBox = styled.div`
    color: #19191A;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: #CAD0D5;
    background-color: white;
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 1.25rem;
    transition: color 0.1s ease-in;
    transition: border-color 0.1s ease-in;
    &:hover{
        transition: color 0.1s ease-in;
        transition: border-color 0.1s ease-in;
        color: black;
        border-color: black;
    }
`