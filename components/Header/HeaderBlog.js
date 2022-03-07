import React from "react";
import styled from "styled-components";

export const ContainerHeaderBlog = styled.div`
  display: flex;
  padding: 1.5em 0 0 0;
  color: ${({ theme }) => theme.colorTextBlue};
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TypeBlog = styled.div`
  background-color: #d5dfff;
  padding: 5px 20px;
  border-radius: 999px;
  margin-right: 1em;
  font-size: 14px;
  font-weight: bold;
  color: #2f1c6a;
`;

export const Autor = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-right: 1em;
`;
export const Duration = styled.div`
  font-weight: bold;

  font-size: 14px;
  margin-right: 1em;
`;
export const DateBlog = styled.div`
  font-weight: bold;
  margin-right: 1em;

  font-size: 14px;
`;
export default function HeaderBlog({ type, duration, date, autor }) {
  return <ContainerHeaderBlog></ContainerHeaderBlog>;
}

/**
 * 
 * <TypeBlog>{type}</TypeBlog>
      <DateBlog>{date}</DateBlog>
      <Autor>{autor}</Autor>
      <Duration>{duration}</Duration>
 */
