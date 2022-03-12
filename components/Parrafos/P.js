import React from "react";
import styled from "styled-components";
const Parrafo = styled.p`
  color: ${({ theme }) => theme.colorTextParrafo};
  font-size: ${(props) => props.size};
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0.3px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 17px;
  }
  padding-top: ${(props) => (props.pt ? props.pt : "20px")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "20px")};
`;

export default function P({ size, pb, pt, children }) {
  return (
    <Parrafo size={size ? size : "19px"} pt={pt} pb={pb}>
      {children}
    </Parrafo>
  );
}
