import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.size || "48"}px;
  color: ${({ theme }) => theme.colorTextBlue};
  margin: 0.5em 0;
  max-width: 768px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    font-size: ${(props) => props.sizeSmall || "38"}px;
  }
`;

export default function TitleComponent({ size, children }) {
  return (
    <Title size={size} sizeSmall={size - 3}>
      {children}
    </Title>
  );
}
