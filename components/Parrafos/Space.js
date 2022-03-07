import React from "react";
import styled from "styled-components";
const Space = styled.hr`
  border: none;
  text-align: center;
  margin: 4em 0;
  &:before {
    content: "∿∿∿" !important;

    color: ${({ theme }) => theme.colorTurkeza};
    font-size: 22px;
  }
`;
export default function SpaceComponent() {
  return <Space></Space>;
}
