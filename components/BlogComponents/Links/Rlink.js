import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const LinkContainer = styled.span`
  color: rgb(20, 184, 166);
  position: relative;
  span:after {
    content: "";
  }
  a:hover {
    span:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid rgb(20, 184, 166);
      transition: 0.2s all;
    }
  }
`;

export default function Rlink({ to, blank, children }) {
  return (
    <LinkContainer>
      <Link href={to}>
        <a target="_blank">
          <span>{children}</span>
        </a>
      </Link>
    </LinkContainer>
  );
}
