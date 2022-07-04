import React from "react";

import styled from "styled-components";
import Link from "next/link";
const ListGroupLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: 0.2s all;

  a {
    margin-top: 1em;

    color: ${({ theme }) => theme.colorTextSubtitle};
    font-size: 1em;
  }
  span {
    position: relative;
  }
  span:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    text-align: center;
    border-bottom: 2px solid rgb(20, 184, 166);
    transition: 0.2s all;
  }
  a:hover {
    span:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      border-bottom: 2px solid rgb(20, 184, 166);
      transition: 0.2s all;
    }
  }
  h3 {
    font-size: 17px;
    margin: 22.4px 0 9.3px;

    color: ${({ theme }) => theme.colorText};
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export default function ListGroup({ list, title }) {
  return (
    <ListGroupLinks>
      <h3>{title}</h3>
      {list.map((el, index) => {
        return (
          <Link href={el.path} key={index}>
            <a>
              <span>{el.name}</span>
            </a>
          </Link>
        );
      })}
    </ListGroupLinks>
  );
}
ListGroup.propType = {};
