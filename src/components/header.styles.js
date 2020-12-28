import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderWrapper = styled.header`
  z-index: 15;
  background-color: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  position: fixed;
  padding: 1rem 0;
  top:0;
  width: 100%;
  border-bottom: 1px solid #e1e8ed;
`

export const HeaderColumnWrapper = styled.div`
  display: flex;
`

export const HeaderLeftWrapper = styled.div`
  width: calc(298px - 2rem);
`

export const HeaderMiddleWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 926px;
`

export const HeaderRightWrapper = styled.div`
  width: 100%;
  max-width: 224px;
  flex: 0 0 auto;
`

export const HeaderBrand = styled(Link)`
  color: black;
  text-decoration: none;
`

export const BrandName = styled.div`
  display: inline-flex;
  font-weight: 650;
  font-size: x-large;
`