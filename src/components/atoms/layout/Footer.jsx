import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 hirom Inc. All rights reserved.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
