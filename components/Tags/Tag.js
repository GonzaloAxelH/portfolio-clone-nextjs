import styled from "styled-components";

const TagWrapper = styled.span`
  font-size: 12px;
  border: 2px solid ${({ theme }) => theme.colorBorder2};
  padding: 3px 8px;
  margin: 3px 4px;
  border-radius: 9999px;
`;

export default function Tag({ text }) {
  return <TagWrapper>{text}</TagWrapper>;
}
