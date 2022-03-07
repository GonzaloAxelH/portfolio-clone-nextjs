import React from "react";
import styled from "styled-components";

const Subtitle = styled.h3`
  font-size: 16px;

  color: ${({ theme }) => theme.colorTurkeza};
  letter-spacing: 0.4px;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default function SubtitleComponent({ children }) {
  return <Subtitle>{children}</Subtitle>;
}
