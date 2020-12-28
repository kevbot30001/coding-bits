import styled from "styled-components";

const PageLeftWrapper = styled.div`
    flex: 1 1 auto;
    margin: 0;
    max-width: 926px;
    padding: 0;
    min-height: calc(100vh - 65px);
    @media only screen and (max-width: 1024px) {
        max-width: 100%;
    }
    @media only screen and (max-width: 1280px) {
        max-width: 100%;
    }
`;

export default PageLeftWrapper;