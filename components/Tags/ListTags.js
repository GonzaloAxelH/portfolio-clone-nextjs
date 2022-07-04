import { useEffect, useState } from "react";
import styled from "styled-components";

import Tag from "./Tag";
const ListWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colorText};
  flex-wrap: wrap;
  margin-bottom: 1em;
`;
export default function ListTags({ listtags = [] }) {
  return (
    <ListWrapper>
      {listtags.map((tag, key) => {
        return <Tag key={key} text={tag} />;
      })}
    </ListWrapper>
  );
}
