import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderBrand = styled(Link)`
  color: black;
  text-decoration: none;
`

export const BrandName = styled.div`
  display: inline-flex;
  font-weight: 650;
  font-size: x-large;
`

export const HeaderWrapper = styled.header`
  background-color: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  display: flex;
  position: fixed;
  padding: 1rem 0;
  top:0;
  width: 100%;
`