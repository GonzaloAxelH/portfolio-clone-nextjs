import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkWrapper = styled.span`
  a {
    color: ${({ theme }) => theme.colorLinkP};
    font-weight: bold;
    line-height: 36px;
    tab-size: 4;
    text-decoration-color: rgb(20, 184, 166);
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    text-underline-offset: 3px;
    width: auto;
  }
`;
export default function LinkComponent({ to, children }) {
  return (
    <LinkWrapper>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </LinkWrapper>
  );
}
