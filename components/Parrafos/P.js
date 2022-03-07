import React from "react";
import styled from "styled-components";
const Parrafo = styled.p`
  color: ${({ theme }) => theme.colorTextParrafo};
  font-size: 20px;
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

export default function P({ pb, pt, children }) {
  return (
    <Parrafo pt={pt} pb={pb}>
      {children}
    </Parrafo>
  );
}
