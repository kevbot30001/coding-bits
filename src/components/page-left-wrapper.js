import styled from "styled-components";

const PageLeftWrapper = styled.div`
    margin: 0;
    padding: 0;
    min-width: calc(298px);
    width: calc((100% - 1448px) / 2 + 298px);
    padding-left: calc((100% - 1448px) / 2);
    background-color: #F2F5FA;
    min-height: calc(100vh - 65px);
    @media only screen and (max-width: 1024px) {
        transition: transform 250ms ease;
        z-index: 30;
        transform: translateX(-100%);
        position: fixed;
        min-height: 100vh;
        top: 0;
    }
`;

export default PageLeftWrapper;