import React from "react";
import styled from "styled-components";
import Link from "next/link";
import IconClose from "../Icons/IconClose";
import { Tag } from "./NavbarStyles";
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-size: 1em;
    font-weight: 700;
  }

  li {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }
`;
const ButtonClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  width: 32px;
  svg {
    width: 10px;
    color: rgb(107, 114, 128);
    fill: rgb(107, 114, 128);
  }
`;

const Beta = styled.span`
  font-size: 10px;
  margin-left: 1em;
`;
export default function NavbarMobile({ handleCloseClick }) {
  return (
    <Nav>
      <li>
        <Link href="/">
          <a>
            <span>Home</span>
          </a>
        </Link>
        <ButtonClose onClick={handleCloseClick}>
          <IconClose />
        </ButtonClose>
      </li>
      <li>
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/proyects">
          <a>
            <span>Proyects</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>
            <span>Blog</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>
            <span>Videos</span>
            <Beta>New Beta</Beta>
          </a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>
            <span>Live Coding</span>
            <Beta>New Beta</Beta>
          </a>
        </Link>
      </li>
    </Nav>
  );
}
